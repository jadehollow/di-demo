import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { remoteRoutes } from './entry.routes';
import { TooltipComponentModule } from '../../../../../libs/mgmt-ui-components/src/lib/misc/tooltip/tooltip.component'

@NgModule({
  declarations: [RemoteEntryComponent, NxWelcomeComponent],
  imports: [CommonModule, RouterModule.forChild(remoteRoutes), TooltipComponentModule],
  providers: [],
})
export class RemoteEntryModule {}
