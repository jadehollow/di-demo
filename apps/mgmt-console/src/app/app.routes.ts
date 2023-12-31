import { Route } from '@angular/router';
import { AppComponent } from './app.component';

export const appRoutes: Route[] = [
  {
    path: 'mgmt-dashboard',
    loadChildren: () =>
      import('mgmt-dashboard/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'mgmt-login',
    loadChildren: () =>
      import('mgmt-login/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    component: AppComponent,
  },
];
