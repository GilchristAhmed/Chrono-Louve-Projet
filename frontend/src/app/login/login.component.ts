import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
userName!: string;
password!: string;

  constructor(private router: Router) { }

  onLogin(form: NgForm) {
    console.log(form.value);
    this.router.navigateByUrl('users');
  }

}
