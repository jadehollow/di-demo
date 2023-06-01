import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToolbarComponentModule } from '../toolbar/toolbar.component';
import { DxToolbarModule } from 'devextreme-angular';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'di-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavBarComponent {
  toolbarItems: any;

  constructor() {
    this.toolbarItems = [
      {
        widget: 'dxButton',
        cssClass: 'drawer-icon',
        options: {
          icon: 'menu',
          hint: 'Open Navigation Drawer',
          // onInitialized: this.showDeletedFilterTextInit,
          // text: `Show Deleted ${this.showDeleted}`,
          stylingMode: 'text',
          hoverStateEnabled: false,
          focusStateEnabled: false,
          activeStateEnabled: false,
          width: '180px',
        },
        location: 'before',
        name: 'drawerIcon',
        locateInMenu: 'auto',
        sortIndex: 1,
        onClick: () => {
          notify('Drawer icon has been clicked!');
        },
      },
    ];
  }
}

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    DxToolbarModule,
    ToolbarComponentModule,
  ],
  exports: [NavBarComponent],
  declarations: [NavBarComponent],
})
export class NavBarComponentModule {}
