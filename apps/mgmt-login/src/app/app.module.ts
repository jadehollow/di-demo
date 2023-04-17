import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.routes';
import {LoginEntryComponent} from './login-entry/login-entry.component';
import {MgmtAuthUxModule} from '@di/mgmt-auth-ux';

@NgModule({
  declarations: [AppComponent, LoginEntryComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {initialNavigation: 'enabledBlocking'}),
    MgmtAuthUxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
