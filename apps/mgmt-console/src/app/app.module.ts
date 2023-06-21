import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { CheckboxComponentModule } from "@mgmt-ui-components/form";
import { TagComponentModule, TreeViewComponentModule } from "@mgmt-ui-components/misc";
import { ToggleComponentModule } from "@mgmt-ui-components/form";
import { TooltipComponentModule } from "@mgmt-ui-components/misc";
import { HelpComponentModule } from "@mgmt-ui-components/misc";
import { ToastNotificationComponentModule } from "@mgmt-ui-components/notifications";
import { FullPageErrorComponentModule } from "@mgmt-ui-components/notifications";
import { TabsComponentModule } from "@mgmt-ui-components/misc";
import { FormsModule } from '@angular/forms';
import { NavBarComponentModule } from "@mgmt-ui-components/navigation";
import { ToolbarComponentModule } from "@mgmt-ui-components/navigation";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CheckboxComponentModule,
    TagComponentModule,
    ToggleComponentModule,
    ToolbarComponentModule,
    TooltipComponentModule,
    HelpComponentModule,
    ToastNotificationComponentModule,
    FullPageErrorComponentModule,
    TabsComponentModule,
    TreeViewComponentModule,
    FormsModule,
    NavBarComponentModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
