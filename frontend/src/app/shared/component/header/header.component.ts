import { Component, OnInit, OnDestroy } from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';
import { Subscription } from 'rxjs';
import {AuthService} from '../../../core/services/auth.service';
import {User} from '../../models/user'; // Importez votre modèle User

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
    this.authSubscription = this.authService.isLoggedIn$.subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn;
      this.checkAdminStatus();
    });

    this.checkAdminStatus();
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
    if (this.isLoggedIn) {
      const user: User | null = this.authService.getCurrentUser(); // Utilisez le type User

      this.isAdmin = !!(user && user.roleUser === 'admin');
    } else {
      this.isAdmin = false;
    }
  }
}
