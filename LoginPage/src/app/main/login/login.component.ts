import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  LoginForm: FormGroup;

  constructor(private form: FormBuilder){
    this.LoginForm = this.form.group({
      username: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  get username(){
    return this.LoginForm.get('username');
  }
  get password(){
    return this.LoginForm.get('password');
  }

  onLogin(){
    console.log('Login Successfull')
  }
}
