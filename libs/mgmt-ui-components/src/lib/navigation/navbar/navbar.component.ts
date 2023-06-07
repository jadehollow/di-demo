import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToolbarComponentModule } from '../toolbar/toolbar.component';
import { DxToolbarModule } from 'devextreme-angular';
import notify from 'devextreme/ui/notify';
import { MgmtIconLibModule } from '@mgmt-icon-lib';
import { iconNames } from '@mgmt-icon-lib';

@Component({
  selector: 'di-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavBarComponent {
  toolbarItems: any;

  constructor() {
    this.toolbarItems = [
      {
        widget: 'dxButton',
        cssClass: 'drawer-btn',
        options: {
          icon: iconNames.navmenu,
          hint: 'Open Navigation Drawer',
          stylingMode: 'text',
          hoverStateEnabled: false,
          focusStateEnabled: true,
          activeStateEnabled: false,
          width: '35px',
          tabIndex: 0,
        },
        location: 'before',
        name: 'drawerBtn',
        locateInMenu: 'never',
        sortIndex: 0,
        onClick: () => {
          notify('Drawer button has been clicked!');
        },
      },
      {
        widget: 'dxButton',
        cssClass: 'logo-btn',
        options: {
          icon: iconNames.diLogoImage,
          hint: 'Open Navigation Drawer',
          stylingMode: 'text',
          hoverStateEnabled: false,
          focusStateEnabled: true,
          activeStateEnabled: false,
          width: '60px',
          tabIndex: 1,
        },
        location: 'before',
        name: 'logoBtn',
        locateInMenu: 'never',
        sortIndex: 1,
        onClick: () => {
          notify('Logo button has been clicked!');
        },
      },
      {
        widget: 'dxButton',
        cssClass: 'dashboard-btn',
        options: {
          icon: iconNames.dashboard,
          hint: 'Go to Dashboard',
          text: 'Dashboard',
          stylingMode: 'text',
          hoverStateEnabled: false,
          focusStateEnabled: true,
          activeStateEnabled: false,
          width: '55px',
          tabIndex: 2,
        },
        location: 'before',
        name: 'dashboardBtn',
        locateInMenu: 'never',
        sortIndex: 2,
        onClick: () => {
          notify('Dashboard button has been clicked!');
        },
      },
      {
        widget: 'dxButton',
        cssClass: 'alerts-btn',
        options: {
          icon: iconNames.error,
          hint: 'Go to Alerts',
          text: 'Alerts',
          stylingMode: 'text',
          hoverStateEnabled: false,
          focusStateEnabled: true,
          activeStateEnabled: false,
          width: '45px',
          tabIndex: 3,
        },
        location: 'before',
        name: 'alertsBtn',
        locateInMenu: 'never',
        sortIndex: 3,
        onClick: () => {
          notify('Alerts button has been clicked!');
        },
      },
      {
        widget: 'dxButton',
        cssClass: 'policies-btn',
        options: {
          icon: iconNames.protectedEntity,
          hint: 'Go to Policies',
          text: 'Policies',
          stylingMode: 'text',
          hoverStateEnabled: false,
          focusStateEnabled: true,
          activeStateEnabled: false,
          width: '50px',
          tabIndex: 4,
        },
        location: 'before',
        name: 'policiesBtn',
        locateInMenu: 'never',
        sortIndex: 4,
        onClick: () => {
          notify('Policies button has been clicked!');
        },
      },
      {
        widget: 'dxButton',
        cssClass: 'assets-btn',
        options: {
          icon: iconNames.monitor,
          hint: 'Go to Assets',
          text: 'Assets',
          stylingMode: 'text',
          hoverStateEnabled: false,
          focusStateEnabled: true,
          activeStateEnabled: false,
          width: '50px',
          tabIndex: 5,
        },
        location: 'before',
        name: 'assetsBtn',
        locateInMenu: 'never',
        sortIndex: 5,
        onClick: () => {
          notify('Assets button has been clicked!');
        },
      },
      {
        widget: 'dxButton',
        cssClass: 'reports-btn',
        options: {
          icon: iconNames.log,
          hint: 'Go to Reports',
          text: 'Reports',
          stylingMode: 'text',
          hoverStateEnabled: false,
          focusStateEnabled: true,
          activeStateEnabled: false,
          width: '50px',
          tabIndex: 6,
        },
        location: 'before',
        name: 'reportsBtn',
        locateInMenu: 'never',
        sortIndex: 6,
        onClick: () => {
          notify('Reports button has been clicked!');
        },
      },
      {
        widget: 'dxButton',
        cssClass: 'logs-btn',
        options: {
          icon: iconNames.book,
          hint: 'Go to Logs',
          text: 'Logs',
          stylingMode: 'text',
          hoverStateEnabled: false,
          focusStateEnabled: true,
          activeStateEnabled: false,
          width: '40px',
          tabIndex: 7,
        },
        location: 'before',
        name: 'logsBtn',
        locateInMenu: 'never',
        sortIndex: 7,
        onClick: () => {
          notify('Logs button has been clicked!');
        },
      },
      {
        widget: 'dxButton',
        cssClass: 'settings-btn',
        options: {
          icon: iconNames.settings,
          hint: 'Go to Settings',
          text: 'Settings',
          stylingMode: 'text',
          hoverStateEnabled: false,
          focusStateEnabled: true,
          activeStateEnabled: false,
          width: '50px',
          tabIndex: 8,
        },
        location: 'before',
        name: 'settingsBtn',
        locateInMenu: 'never',
        sortIndex: 8,
        onClick: () => {
          notify('Settings button has been clicked!');
        },
      },
      {
        widget: 'dxButton',
        cssClass: 'help-btn',
        options: {
          icon: iconNames.help,
          hint: 'Go to Help',
          stylingMode: 'text',
          hoverStateEnabled: false,
          focusStateEnabled: true,
          activeStateEnabled: false,
          width: '40px',
          tabIndex: 9,
        },
        location: 'after',
        name: 'helpBtn',
        locateInMenu: 'never',
        sortIndex: 9,
        onClick: () => {
          notify('Help button has been clicked!');
        },
      },
      {
        widget: 'dxButton',
        cssClass: 'user-settings-btn',
        options: {
          icon: iconNames.settings,
          hint: 'Go to User Settings',
          stylingMode: 'text',
          hoverStateEnabled: false,
          focusStateEnabled: true,
          activeStateEnabled: false,
          width: '40px',
          tabIndex: 10,
        },
        location: 'after',
        name: 'userSettingsBtn',
        locateInMenu: 'never',
        sortIndex: 10,
        onClick: () => {
          notify('User settings button has been clicked!');
        },
      },
      {
        widget: 'dxButton',
        cssClass: 'user-btn',
        options: {
          icon: iconNames.user,
          hint: 'Go to User',
          stylingMode: 'text',
          hoverStateEnabled: false,
          focusStateEnabled: true,
          activeStateEnabled: false,
          width: '40px',
          tabIndex: 11,
        },
        location: 'after',
        name: 'userBtn',
        locateInMenu: 'never',
        sortIndex: 11,
        onClick: () => {
          notify('User button has been clicked!');
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
    MgmtIconLibModule,
    ToolbarComponentModule,
  ],
  exports: [NavBarComponent],
  declarations: [NavBarComponent],
})
export class NavBarComponentModule {}
