import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UserListComponent} from './user-list/user-list.component';
import {HeaderComponent} from './header/header.component';
import {LoginComponent} from './login/login.component';
import {UserComponent} from './user/user.component';
import {UserDetailComponent} from './user-detail/user-detail.component';
import { FormsModule } from '@angular/forms';
import {RouterOutlet} from "@angular/router";

@NgModule({
  declarations: [
    UserListComponent,
    UserDetailComponent,
    UserComponent,// Déclarez UserListComponent
    HeaderComponent,
    LoginComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
