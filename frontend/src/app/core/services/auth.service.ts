// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, tap, catchError, throwError, map } from 'rxjs';
import { User } from '../../shared/models/user';

interface AuthResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/auth';
  private tokenSubject = new BehaviorSubject<string | null>(this.getToken());
  public token$ = this.tokenSubject.asObservable();
  public isLoggedIn$ = this.token$.pipe(map((token) => !!token));
  private currentUserSubject = new BehaviorSubject<User | null>(this.loadCurrentUser()); // Pour stocker les infos utilisateur
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, { email, password })
      .pipe(
        tap((response: AuthResponse) => {
          this.setToken(response.token);
          // Après la connexion, récupérez (ou stockez si déjà présent dans la réponse) les infos utilisateur
          this.loadUserDetails().subscribe(user => this.currentUserSubject.next(user));
        }),
        catchError(this.handleError)
      );
  }

  // Méthode pour récupérer les informations de l'utilisateur connecté
  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  // Méthode pour charger les informations de l'utilisateur (par exemple, depuis le localStorage ou une requête API)
  private loadCurrentUser(): User | null {
    // Exemple: Si vous stockez les infos utilisateur dans le localStorage après la connexion
    const userString = localStorage.getItem('currentUser');
    if (userString) {
      try {
        return JSON.parse(userString) as User;
      } catch (error) {
        console.error('Erreur lors de la lecture des infos utilisateur depuis le localStorage', error);
        return null;
      }
    }
    return null;
  }

  // Méthode pour récupérer les détails de l'utilisateur depuis l'API (à adapter selon votre backend)
  private loadUserDetails(): Observable<User> {
    // Assurez-vous d'avoir une route backend pour récupérer les détails de l'utilisateur en utilisant le token
    // Exemple d'endpoint: /api/users/me
    const headers = this.getHeaderWithToken(); // Assurez-vous que cette méthode ajoute le token
    return this.http.get<User>(`${this.apiUrl}/me`, headers).pipe(
      tap(user => localStorage.setItem('currentUser', JSON.stringify(user))), // Stockez les infos utilisateur
      catchError(this.handleError)
    );
  }

  logout(): void {
    this.removeToken();
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.tokenSubject.next(null);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  private setToken(token: string): void {
    localStorage.setItem('token', token);
    this.tokenSubject.next(token);
  }

  private removeToken(): void {
    localStorage.removeItem('token');
  }

  private getHeaderWithToken() {
    const token = this.getToken();
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return { headers };
  }

  private handleError(error: HttpErrorResponse) {
    console.error("Erreur d'authentification", error);
    return throwError(() => error);
  }

  register(userData: User): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/signup`, userData);
  }
}
