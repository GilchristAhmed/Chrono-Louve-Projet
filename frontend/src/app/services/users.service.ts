import {Injectable} from '@angular/core';
import {user} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private user: user[] = [
    new user(
      "N00001",
      "Gilchrist",
      "Majid",
      "majid@test.com",
      "56116360",
      "maison de luxe",
      95000,
      "Paris",
      "France",
      "123456789bebe",
      "client",
      new Date(),
      "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg"
    ),
    new user(
      "N00002",
      "MisterAdmin",
      "First",
      "adminer@test.com",
      "46616360",
      "rue des claires fontaines",
      6180,
      "Courcelles",
      "Belgique",
      "Jojobizarre23",
      "admin",
      new Date(),
      "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg"
    )];

  getUser() {
    return [...this.user];
  }
  setUser(user: user[]) {
    this.user = user;
  }

  FindUserById(UserId: string | null):user{
    const foundUserbyId = this.user.find(user => user.UserId === UserId);
    if (!foundUserbyId) {
      throw new Error('Utilisateur introuvable');
    }
    return foundUserbyId;
  }

}
