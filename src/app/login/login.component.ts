import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormService } from '../form.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  apiKey: string = 'AIzaSyAWjhzV9o4gaJh-kXlSiD2EfxwZpErzfsM';
  constructor(private _HttpClient: HttpClient, private _Router: Router, private _FormService: FormService) { }

  LoginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{4,12}$/)])
  })

  erro: string = '';
  SendLoginData(formData: FormGroup) {
    if (formData.valid) {
      this._FormService.SignIn(formData.value, this.apiKey).subscribe({
        next: (val) => {
          if(val.idToken){
            localStorage.setItem('UserToken', val.idToken);
            this._FormService.DecodeUserData();
          }
        },
        error: (err) => {
          this.erro = err.error.error.message
        },
        complete: () => {
          this._Router.navigate(['home'])
        }
      })
    }
  }

  Register() {
    this._Router.navigate(['register'])
  }

  ngOnInit(): void {

  }
}
