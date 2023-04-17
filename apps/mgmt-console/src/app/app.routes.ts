import {Route} from '@angular/router';
import {inject} from '@angular/core';
import {RouteAvailabilityService} from './services/route-availability.service';

export const appRoutes: Route[] = [
  {
    path: '',
    canMatch: [() => inject(RouteAvailabilityService).redirectToUserHomePage()],
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'alerts',
    loadChildren: () => import('./entry-modules/alerts/alerts.module')
      .then(m => m.AlertsModule)
  }
];
