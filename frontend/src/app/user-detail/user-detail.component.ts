import {Component, Input, OnInit} from '@angular/core';
import {user} from '../models/user';
import {UsersService} from '../services/users.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-detail',
  imports: [],
  standalone: true,
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent implements OnInit{
  user!: user;
  constructor(private UsersService: UsersService,
              private router: ActivatedRoute) { };

ngOnInit() {
  this.getUserId();
}

private getUserId() {

  const UserId = this.router.snapshot.paramMap.get('UserId');
  this.user = this.UsersService.FindUserById(UserId);
}


}
