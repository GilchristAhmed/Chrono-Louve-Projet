import { Routes } from '@angular/router';
import {LandingpageComponent} from './landingpage/landingpage.component';
import {UserListComponent} from './user-list/user-list.component';
import {LoginComponent} from './login/login.component';
import {UserDetailComponent} from './user-detail/user-detail.component';

export const routes: Routes = [
 { path: '', component: LoginComponent },
  {
    path: 'login',
    component: LoginComponent,
  },

  { path: 'users', component: UserListComponent },

  { path: 'users/:UserId', component: UserDetailComponent }

];
