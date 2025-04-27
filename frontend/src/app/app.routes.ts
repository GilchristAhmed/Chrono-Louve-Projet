import { Routes } from '@angular/router';
import {RegisterComponent} from './pages/register/register.component';
import {LoginComponent} from './pages/login/login.component';
import { CommentformComponent } from './pages/commentform/commentform.component';

export const routes: Routes = [

  {path:'comment',component:CommentformComponent},
  {path:'register',component:RegisterComponent},
  {path:'',component:LoginComponent},

];
