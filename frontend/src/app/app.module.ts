import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UserListComponent} from './user-list/user-list.component';
import {HeaderComponent} from './header/header.component';
import {LoginComponent} from './login/login.component';
import {UserComponent} from './user/user.component';
import {UserDetailComponent} from './user-detail/user-detail.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterOutlet} from "@angular/router";
import { RegisterComponent } from './register/register.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    UserListComponent,
    UserDetailComponent,
    UserComponent,// Déclarez UserListComponent
    HeaderComponent,
    LoginComponent,
    AppComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
