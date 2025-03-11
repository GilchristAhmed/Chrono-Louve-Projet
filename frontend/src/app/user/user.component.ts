import {Component, Input, OnInit} from '@angular/core';
import {user} from '../models/user';
import {UsersService} from '../services/users.service';

@Component({
  selector: 'app-user',
  imports: [],
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  @Input() user!: user;
  constructor(private UsersService: UsersService) { }


}
