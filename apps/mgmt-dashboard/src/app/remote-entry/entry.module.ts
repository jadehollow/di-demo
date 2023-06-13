import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { remoteRoutes } from './entry.routes';
import { TooltipComponentModule } from '../../../../../libs/mgmt-ui-components/src/lib/misc/tooltip/tooltip.component'

@NgModule({
  declarations: [RemoteEntryComponent],
  imports: [CommonModule, RouterModule.forChild(remoteRoutes), TooltipComponentModule],
  providers: [],
})
export class RemoteEntryModule {}
