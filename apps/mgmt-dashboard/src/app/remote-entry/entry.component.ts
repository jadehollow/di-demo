import { Component } from '@angular/core';

@Component({
  selector: 'di-saas-fe-mgmt-dashboard-entry',
  template: `<di-saas-fe-nx-welcome></di-saas-fe-nx-welcome><div id="test">test</div><app-tooltip target="#test">Tooltip Content</app-tooltip>`,
})
export class RemoteEntryComponent {}
