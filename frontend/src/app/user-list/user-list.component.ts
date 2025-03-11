import {Component, OnInit} from '@angular/core';
import {user} from '../models/user';
import {UserComponent} from '../user/user.component';
import {UsersService} from '../services/users.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  templateUrl: './user-list.component.html',
  imports: [
    UserComponent
  ],
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit{
  Users! : user[];
  constructor(private UsersService: UsersService) { }
  ngOnInit(): void {
    this.Users= this.UsersService.getUser();
  }
}
