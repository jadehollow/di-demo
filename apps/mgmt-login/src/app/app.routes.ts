import { Route } from '@angular/router';
import {LoginEntryComponent} from './login-entry/login-entry.component';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginEntryComponent
  }
];
