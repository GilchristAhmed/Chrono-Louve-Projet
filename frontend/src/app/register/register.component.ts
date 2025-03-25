import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from '@angular/forms';
import {map, Observable} from 'rxjs';
import {user} from '../models/user';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit{

  userForm!: FormGroup;
  userPreview$!: Observable<user>;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      nom: null,
      prenom: null,
      photoUrl: null,
      tel: null,
      email: null,
      adresse: null,
      codepostal: null,
      ville: null,
      pays: null,
      password: null
    });

    this.userPreview$ = this.userForm.valueChanges.pipe(
      map(formValue => (
        {
          ...formValue,
          createdAt: new Date(),
          userId: 0,
          role: 'user'
        }
      ))
    );
  }

  onRegisterForm(){
    console.log(this.userForm.value);
  }
}
