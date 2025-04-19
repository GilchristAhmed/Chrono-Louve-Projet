import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent implements OnInit{

  //userName: String;
  //Password: String;

  constructor(private router: Router) { }
  ngOnInit(): void {
  }

  onContinue(): void {
    //this.router.navigateByUrl(['login']);
  }

  onLogin(){
    //console.log(this.userName);
    //console.log(this.Password);
  }

}
