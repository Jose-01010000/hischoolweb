import { Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignoutComponent } from './signout/signout.component';

export const routes_login: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'signout', component: SignoutComponent },
  { path: '**', redirectTo: 'signin', pathMatch: 'full' },
];
