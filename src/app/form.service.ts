import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private _HttpClient:HttpClient) {
    if( localStorage.getItem('UserToken') != null ){
      this.DecodeUserData();
    }
  }

  UserData = new BehaviorSubject(null);
  // GET USER DATA ...............
  DecodeUserData(){
    let decodeData = JSON.stringify(localStorage.getItem('UserToken'));
    this.UserData.next( jwtDecode( decodeData ) );
  }

  // SIGN-UP .....................
  SignUp(formData:object, apiKey: string): Observable<any>{
    return this._HttpClient.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`, formData);
  }

  // SIGN-IN .....................
  SignIn(formData:object, apiKey: string): Observable<any>{
    return this._HttpClient.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, formData);
  }

  // LOG-OUT ....................
  DeleteUserData(){
    localStorage.removeItem('UserToken');
    this.UserData.next(null);
  }

}

