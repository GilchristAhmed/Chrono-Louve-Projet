import { Routes } from '@angular/router';
import {RegisterComponent} from './pages/register/register.component';
import {LoginComponent} from './pages/login/login.component';
import { CommentformComponent } from './pages/commentform/commentform.component';
import {UserListComponent} from "./pages/user-list/user-list.component";
import {LandingpageComponent} from "./pages/landingpage/landingpage.component";

export const routes: Routes = [

  {path:'comment',component:CommentformComponent},
  {path:'user',component:UserListComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'',component:LandingpageComponent},

];
