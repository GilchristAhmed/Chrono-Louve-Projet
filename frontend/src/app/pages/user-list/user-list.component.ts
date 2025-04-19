import {Component, OnInit} from '@angular/core';
import {User} from '../../shared/models/user';

import {UsersService} from '../../core/services/users.service';
import {Observable} from "rxjs";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit{
  users! : User[];
  users$!: Observable<User[]>;
  constructor(private UsersService: UsersService) { }
  ngOnInit(): void {
    this.users= this.UsersService.getUser();
  }

}
