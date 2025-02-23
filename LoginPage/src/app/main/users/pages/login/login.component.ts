import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  LoginForm: FormGroup;

  constructor(private form: FormBuilder, private userService: UserService, private router: Router){
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
    const { username, password } = this.LoginForm.value;

    if(this.userService.validateLogin(username, password)){
      this.router.navigate(['/main/detail'])
    }
    else {
      console.log('error');
    }
  }
}
