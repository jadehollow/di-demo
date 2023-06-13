import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToolbarComponentModule } from '../toolbar/toolbar.component';
import { DxToolbarModule } from 'devextreme-angular';
import notify from 'devextreme/ui/notify';
import { MgmtIconLibModule } from '@mgmt-icon-lib';
import { iconNames } from '@mgmt-icon-lib';
import { Router } from '@angular/router';

@Component({
  selector: 'di-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavBarComponent {
  toolbarItems: any;
  userName: string = 'User Name';

  constructor(private router: Router) {
    this.toolbarItems = [
      {
        widget: 'dxButton',
        cssClass: 'drawer-btn',
        options: {
          icon: iconNames['nav-menu'],
          elementAttr: { 'aria-label': 'Open menu to switch between services' },
          hint: 'Open navigation drawer',
          stylingMode: 'text',
          hoverStateEnabled: false,
          focusStateEnabled: false,
          activeStateEnabled: false,
          width: '60px',
          height: '60px',
          tabIndex: 1,
        },
        location: 'before',
        name: 'drawerBtn',
        locateInMenu: 'never',
        html: '<i class="dx-icon-logo"></i>',
        onClick: () => {
          notify('Drawer button has been clicked!');
        },
      },
      {
        widget: 'dxButton',
        cssClass: 'dashboard-btn',
        options: {
          icon: iconNames['dashboard'],
          elementAttr: { 'aria-label': 'Go to dashboard' },
          hint: 'Go to dashboard',
          text: 'Dashboard',
          stylingMode: 'text',
          hoverStateEnabled: true,
          focusStateEnabled: true,
          activeStateEnabled: true,
          width: '80px',
          height: '67px',
          tabIndex: 2,
        },
        location: 'before',
        name: 'dashboardBtn',
        locateInMenu: 'never',
        onClick: () => {
          this.router.navigateByUrl('/mgmt-dashboard');
        },
      },
      {
        widget: 'dxButton',
        cssClass: 'alerts-btn',
        options: {
          icon: iconNames['error'],
          elementAttr: { 'aria-label': 'Go to alerts page' },
          hint: 'Go to alerts',
          text: 'Alerts',
          stylingMode: 'text',
          hoverStateEnabled: true,
          focusStateEnabled: true,
          activeStateEnabled: true,
          width: '80px',
          height: '67px',
          tabIndex: 3,
        },
        location: 'before',
        name: 'alertsBtn',
        locateInMenu: 'never',
        onClick: () => {
          this.router.navigateByUrl('/');
        },
      },
      {
        widget: 'dxButton',
        cssClass: 'policies-btn',
        options: {
          icon: iconNames['protected-entity'],
          elementAttr: { 'aria-label': 'Go to policies page' },
          hint: 'Go to policies',
          text: 'Policies',
          stylingMode: 'text',
          hoverStateEnabled: true,
          focusStateEnabled: true,
          activeStateEnabled: true,
          width: '80px',
          height: '67px',
          tabIndex: 4,
        },
        location: 'before',
        name: 'policiesBtn',
        locateInMenu: 'never',
        onClick: () => {
          notify('Policies button has been clicked!');
        },
      },
      {
        widget: 'dxButton',
        cssClass: 'assets-btn',
        options: {
          icon: iconNames['monitor'],
          elementAttr: { 'aria-label': 'Go to assets page' },
          hint: 'Go to assets',
          text: 'Assets',
          stylingMode: 'text',
          hoverStateEnabled: true,
          focusStateEnabled: true,
          activeStateEnabled: true,
          width: '80px',
          height: '67px',
          tabIndex: 5,
        },
        location: 'before',
        name: 'assetsBtn',
        locateInMenu: 'never',
        onClick: () => {
          notify('Assets button has been clicked!');
        },
      },
      {
        widget: 'dxButton',
        cssClass: 'reports-btn',
        options: {
          icon: iconNames['log'],
          elementAttr: { 'aria-label': 'Go to reports page' },
          hint: 'Go to reports',
          text: 'Reports',
          stylingMode: 'text',
          hoverStateEnabled: true,
          focusStateEnabled: true,
          activeStateEnabled: true,
          width: '80px',
          height: '67px',
          tabIndex: 6,
        },
        location: 'before',
        name: 'reportsBtn',
        locateInMenu: 'never',
        onClick: () => {
          notify('Reports button has been clicked!');
        },
      },
      {
        widget: 'dxButton',
        cssClass: 'logs-btn',
        options: {
          icon: iconNames['book'],
          elementAttr: { 'aria-label': 'Go to logs page' },
          hint: 'Go to logs',
          text: 'Logs',
          stylingMode: 'text',
          hoverStateEnabled: true,
          focusStateEnabled: true,
          activeStateEnabled: true,
          width: '80px',
          height: '67px',
          tabIndex: 7,
        },
        location: 'before',
        name: 'logsBtn',
        locateInMenu: 'never',
        onClick: () => {
          notify('Logs button has been clicked!');
        },
      },
      {
        widget: 'dxButton',
        cssClass: 'settings-btn',
        options: {
          icon: iconNames['settings'],
          elementAttr: { 'aria-label': 'Go to settings page' },
          hint: 'Go to settings',
          text: 'Settings',
          stylingMode: 'text',
          hoverStateEnabled: true,
          focusStateEnabled: true,
          activeStateEnabled: true,
          width: '80px',
          height: '67px',
          tabIndex: 8,
        },
        location: 'before',
        name: 'settingsBtn',
        locateInMenu: 'never',
        onClick: () => {
          notify('Settings button has been clicked!');
        },
      },
      {
        widget: 'dxButton',
        cssClass: 'help-btn',
        options: {
          icon: iconNames['help'],
          elementAttr: { 'aria-label': 'Go to help page' },
          hint: 'Go to help',
          stylingMode: 'text',
          hoverStateEnabled: true,
          focusStateEnabled: true,
          activeStateEnabled: true,
          width: '40px',
          tabIndex: 9,
        },
        location: 'after',
        name: 'helpBtn',
        locateInMenu: 'never',
        onClick: () => {
          notify('Help button has been clicked!');
        },
      },
      {
        widget: 'dxButton',
        cssClass: 'notification-btn',
        options: {
          icon: iconNames['new-notification'],
          elementAttr: { 'aria-label': 'Go to notifications' },
          hint: 'Go to notifications',
          stylingMode: 'text',
          hoverStateEnabled: true,
          focusStateEnabled: true,
          activeStateEnabled: true,
          width: '40px',
          tabIndex: 10,
        },
        location: 'after',
        name: 'notificationsBtn',
        locateInMenu: 'never',
        onClick: () => {
          notify('Notifications button has been clicked!');
        },
      },
      {
        widget: 'dxButton',
        cssClass: 'theme-btn',
        options: {
          elementAttr: { 'aria-label': 'Switch between light and dark mode' },
          stylingMode: 'text',
          text: 'Light Mode',
          hoverStateEnabled: true,
          focusStateEnabled: true,
          activeStateEnabled: true,
          width: '320px',
          tabIndex: 11,
        },
        location: 'after',
        name: 'themeBtn',
        locateInMenu: 'always',
        onClick: () => {
          notify('Theme button has been clicked!');
        },
      },
      {
        widget: 'dxButton',
        cssClass: 'profile-btn',
        options: {
          elementAttr: { 'aria-label': 'Go to user profile' },
          stylingMode: 'text',
          text: 'My Profile',
          hoverStateEnabled: true,
          focusStateEnabled: true,
          activeStateEnabled: true,
          width: '320px',
          tabIndex: 12,
        },
        location: 'after',
        name: 'profileBtn',
        locateInMenu: 'always',
        onClick: () => {
          notify('Profile button has been clicked!');
        },
      },
      {
        widget: 'dxButton',
        cssClass: 'sign-out-btn',
        options: {
          elementAttr: { 'aria-label': 'Sign out' },
          stylingMode: 'text',
          text: 'Sign Out',
          hoverStateEnabled: true,
          focusStateEnabled: true,
          activeStateEnabled: true,
          width: '320px',
          tabIndex: 13,
        },
        location: 'after',
        name: 'signOutBtn',
        locateInMenu: 'always',
        onClick: () => {
          notify('Sign out button has been clicked!');
        },
      },
      {
        cssClass: 'user-name',
        elementAttr: { 'aria-label': 'User name display' },
        location: 'after',
        name: 'userName',
        locateInMenu: 'never',
        tabIndex: 14,
        text: `${this.userName}`,
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
