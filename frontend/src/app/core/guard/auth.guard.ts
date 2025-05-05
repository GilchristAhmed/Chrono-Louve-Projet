import {CanActivateFn, Router} from '@angular/router';
import { inject } from '@angular/core';
import { Observable, map, take } from 'rxjs';
import {AuthService} from '../services/auth.service';


export const authGuard: CanActivateFn =  (): Observable<boolean> => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.isLoggedIn$.pipe(
    take(1),
    map((loggedIn) => {
      if (loggedIn) {
        return true;
      }
      router.navigate(['/login']);
      return false;
    })
  );
};
