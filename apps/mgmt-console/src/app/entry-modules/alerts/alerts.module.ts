import {NgModule} from '@angular/core';
import {AlertsEntryComponent} from './alerts-entry/alerts-entry.component';
import {AlertsRoutingModule} from './alerts-routing.module';

@NgModule({
  declarations: [AlertsEntryComponent],
  exports: [AlertsEntryComponent],
  imports: [AlertsRoutingModule],
  providers: []
})
export class AlertsModule {
}
