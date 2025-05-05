import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
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
  errorMessage: string = '';


  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) {
    this.loginForm = this.formBuilder.group({
      email: "",
      password: ""
    });
  }

  ngOnInit(): void {}

  onLogin() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      console.log('Tentative de connexion avec :', this.loginForm.value);
      this.authService.login(email, password).subscribe({
        next: (response) => {
          console.log('Connexion réussie', response);
          this.router.navigateByUrl('user');
        },
        error: (error) => {
          console.error('Erreur de connexion', error);
          this.errorMessage = "Identifiants incorrects. Veuillez réessayer."; // Afficher un message d'erreur
        }
      });
    } else {
      this.errorMessage = "Veuillez remplir tous les champs correctement."; // Afficher une erreur si le formulaire est invalide
    }
  }

}
