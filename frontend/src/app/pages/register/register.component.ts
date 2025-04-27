import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {map, Observable} from 'rxjs';
import {User} from '../../shared/models/user';

import {AuthService} from '../../core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  imports: [
    ReactiveFormsModule
  ],
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit{

  user!: User;
  userForm!: FormGroup;


  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) {
    this.userForm = this.formBuilder.group({
      email: "",
      password: "",
      fName: "",
      lName: ""
      //photoUrl: null,
      //tel: null,

      //adresse: null,
      //codepostal: null,
      //ville: null,
      //pays: null,

    });
  }

  ngOnInit(): void {

  }

  onRegisterForm(){
    console.log(this.userForm.value);
    const userdata = {
      ...this.userForm.value,
      roleUser:"user"
    };

    this.authService.register(userdata).subscribe(() => {
      this.router.navigate(['/login']);
    });
  }
}
