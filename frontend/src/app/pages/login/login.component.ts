import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, NgForm, ReactiveFormsModule} from "@angular/forms";
import {AuthService} from '../../core/services/auth.service';
import {User} from '../../shared/models/user';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  user!: User;
  loginForm!: FormGroup;


  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) {
    this.loginForm = this.formBuilder.group({
      email: "",
      password: ""
    });
  }

  ngOnInit(): void {}

  onLogin() {
    const {email, password} = this.loginForm.value;
    console.log(this.loginForm.value);
    this.authService.login(email, password).subscribe(()=>{
      this.router.navigateByUrl('users');
    });

  }

}
