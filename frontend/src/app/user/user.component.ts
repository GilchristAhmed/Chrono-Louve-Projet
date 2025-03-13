import {Component, Input, OnInit} from '@angular/core';
import {user} from '../models/user';
import {UsersService} from '../services/users.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  @Input() user!: user;
  constructor(private router: Router) { }


  onViewUser() {
    this.router.navigateByUrl(`users/${this.user.UserId}`);

  }
}
