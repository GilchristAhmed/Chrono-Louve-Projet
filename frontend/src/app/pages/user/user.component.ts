import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../shared/models/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  @Input() user!: User;
  constructor(private router: Router) { }


  onViewUser() {
    this.router.navigateByUrl(`users/${this.user.UserId}`);

  }
}
