import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError, Observable, tap, throwError} from 'rxjs';
import {User} from '../../shared/models/user';

interface AuthResponse {
  user: {
    token: string;
    id:number;
  };
  // ... autres propriétés de la réponse
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000';

  private getHeader(){
    let headers = new HttpHeaders({
      'Authorization': `Bearer`,
      'Content-Type': 'application/json'
    });
    return { headers };
  }

  constructor(private http: HttpClient) {
  }
  login(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, { email, password }) // Utiliser email et password
      .pipe(
        tap((response: AuthResponse) => { // Utiliser l'interface AuthResponse
          console.log("Réponse API: ", response);
          if (response.user.token) {
            console.log("Token enregistré", response.user.token);
          }
        }),
        catchError(this.handleError) // Gestion des erreurs
      );
  }


  isLoggedIn(): boolean {
    if (typeof window !== 'undefined' && localStorage.getItem('token')) {
      return true;
    }
    return false;
  }


  private handleError(error: HttpErrorResponse) {
    console.error("Erreur de connexion", error);
    return throwError(() => error);
  }

  register(userData: User ) {
    return this.http.post<any>(`${this.apiUrl}/signup`, userData) // Utiliser email et password
      ;

  }
}
