import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../../core/services/auth.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnDestroy {
  isLoggedIn: boolean = false;
  isAdmin: boolean = false;
  private authSubscription?: Subscription;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    // Souscrivez à isLoggedIn$ pour réagir aux changements de connexion.
    this.authSubscription = this.authService.isLoggedIn$.subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn;
      this.checkAdminStatus(); // Appelée à chaque changement de connexion
    });

    this.checkAdminStatus(); // Appelée une fois à l'initialisation du composant
  }

  ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  private checkAdminStatus(): void {
    // Obtient l'utilisateur *actuel* depuis le service.
    const user: User | null = this.authService.getCurrentUser();

    // Vérifie si un utilisateur est connecté et si son rôle est 'admin'.
    this.isAdmin = this.isLoggedIn && user !== null && user.roleUser === 'admin';
  }
}
