import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from '../form.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _FormService:FormService, private _Router:Router) { }
  isLoged:boolean = false;

  ngOnInit(): void {
    this._FormService.UserData.subscribe( data => {
      if(data){
        this.isLoged = true;
      }
      else{
        this.isLoged = false;
      }
    } )
  }

  LogOut(){
    this._FormService.DeleteUserData();
    this._Router.navigate(['login']);

  }
}
