import {Component, OnInit} from '@angular/core';
import {user} from '../models/user';

import {UsersService} from '../services/users.service';
import {Observable} from "rxjs";

@Component({
  selector: 'app-user-list',
  standalone: false,
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit{
  Users! : user[];
  Users$!: Observable<user[]>;
  constructor(private UsersService: UsersService) { }
  ngOnInit(): void {
    this.Users= this.UsersService.getUser();
  }

}
