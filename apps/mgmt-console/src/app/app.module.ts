import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { FormsModule } from '@angular/forms';
import { CheckboxComponentModule } from "@mgmt-ui-components/form";
import { NavBarComponentModule } from "@mgmt-ui-components/navigation";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CheckboxComponentModule,
    FormsModule,
    NavBarComponentModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
