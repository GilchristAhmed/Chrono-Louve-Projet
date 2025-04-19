import {Injectable} from '@angular/core';
import {User} from '../../shared/models/user';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})


export class UsersService {
  private apiUrl = 'http://localhost:3000/api';
  constructor(private  http: HttpClient) {
  }

  private user!: User[] ;

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  }
  getUser() {
    return [...this.user];
  }
  setUser(user: User[]) {
    this.user = user;
  }

  FindUserById(UserId: string | null):User{
    // @ts-ignore
    const foundUserbyId = this.user.find(user => user.UserId === UserId);
    if (!foundUserbyId) {
      throw new Error('Utilisateur introuvable');
    }
    return foundUserbyId;
  }


}
