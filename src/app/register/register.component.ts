import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormService } from '../form.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  apiKey: string = 'AIzaSyAWjhzV9o4gaJh-kXlSiD2EfxwZpErzfsM';
  constructor(private _FormService: FormService, private _Router: Router) { }

  RegisterForm: FormGroup = new FormGroup({
    first_name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(8)]),
    last_name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(8)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{4,12}$/)]),
    age: new FormControl(null, [Validators.required, Validators.pattern('^[0-9]{2}$')])
  })

  err: string = "";
  SendFormData(RegisterForm: FormGroup) {
    let userData = { email: '', password: '', returnSecureToken: true };
    if (RegisterForm.valid) {
      userData.email = RegisterForm.value.email;
      userData.password = RegisterForm.value.password;
      this._FormService.SignUp(userData, this.apiKey).subscribe({
        next: (val) => {
          if (val.idToken) {
            this._Router.navigate(['login'])
          }
        },
        error: (err) => {
          this.err = err.error.error.message
        }
      })
    }
  }

  ngOnInit(): void {
  }
}




