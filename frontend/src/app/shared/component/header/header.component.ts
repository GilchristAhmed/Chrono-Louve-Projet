import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';
import {AuthService} from '../../../core/services/auth.service';


@Component({
  selector: 'app-header',
  imports: [
    RouterLinkActive,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean = true;

  constructor(private http: HttpClient, private router: Router, private authService: AuthService ) {
  }

  ngOnInit() {
    this.State();
  }
  logout(): void {

  }

  State(){
    if(this.authService.isLoggedIn()){
      this.isLoggedIn = true;
    }else {
      this.isLoggedIn = false;
    }

  }


}
