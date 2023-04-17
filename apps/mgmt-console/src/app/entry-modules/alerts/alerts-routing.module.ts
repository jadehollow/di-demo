import {Route, RouterModule} from '@angular/router';
import {AlertsEntryComponent} from './alerts-entry/alerts-entry.component';
import {NgModule} from '@angular/core';

export const alertRoutes: Route[] = [
  // {
  //   path: '',
  //   canMatch: [() => inject(RouteAvailabilityService).redirectToHomePage()]
  // },
  {
    path: '',
    component: AlertsEntryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(alertRoutes)],
  exports: [RouterModule]
})
export class AlertsRoutingModule {
}
