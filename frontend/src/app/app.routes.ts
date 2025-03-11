import { Routes } from '@angular/router';
import {LandingpageComponent} from './landingpage/landingpage.component';
import {UserListComponent} from './user-list/user-list.component';
import {LoginComponent} from './login/login.component';

export const routes: Routes = [
 { path: '', component: LoginComponent },

  { path: 'users', component: UserListComponent }

];
