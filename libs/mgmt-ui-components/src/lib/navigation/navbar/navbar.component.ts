import { CommonModule, DOCUMENT } from '@angular/common';
import {Component, EventEmitter, Inject, NgModule, Output, ViewChild} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToolbarComponentModule } from '../toolbar/toolbar.component';
import {
  DxButtonModule,
  DxDrawerComponent,
  DxDrawerModule,
  DxListModule,
} from 'devextreme-angular';
import notify from 'devextreme/ui/notify';
import { iconNames } from '@mgmt-icon-lib';
import { Router } from '@angular/router';

@Component({
  selector: 'di-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavBarComponent {
  // @ViewChild(DxDrawerComponent, { static: false }) drawer!: DxDrawerComponent;

  toolbarItems: any;
  userName: string = 'User Name';
  @Output() onClick: EventEmitter<string> = new EventEmitter();

  // selectedOpenMode: string = 'overlap';
  // selectedPosition: string = 'left';
  // selectedRevealMode: string = 'slide';
  // isDrawerOpen: boolean = false;
  // navDrawer: any;

  constructor(
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.document.body.classList.add('light-mode');

    // this.navDrawer = [
    //   { id: 1, text: 'Products', icon: 'product' },
    //   { id: 2, text: 'Sales', icon: 'money' },
    //   { id: 3, text: 'Customers', icon: 'group' },
    //   { id: 4, text: 'Employees', icon: 'card' },
    //   { id: 5, text: 'Reports', icon: 'chart' },
    // ];

    this.toolbarItems = [
      // Drawer Button
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
        // onClick: () => this.isDrawerOpen = !this.isDrawerOpen,
        onClick: (e: any) => { this.onClick.emit(e) }
      },
      // Dashboard Button
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
        // onClick: () => this.isDrawerOpen = !this.isDrawerOpen,
        onClick: (e: any) => { this.onClick.emit(e) }
      },
      // Alerts Button
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
      // Policies Button
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
      // Assets Button
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
      // Reports Button
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
      // Logs Button
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
      // Settings Button
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
      // Help Button
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
      // Notifications Button
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
      // Theme Button
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
        // html: '<di-toggle [value]="false"></di-toggle>',
        onClick: () => {
          notify('Theme button has been clicked!');
        },
      },
      // Theme Toggle
      {
        widget: 'dxSwitch',
        cssClass: 'theme-switch',
        options: {
          elementAttr: { 'aria-label': 'Theme toggle' },
          stylingMode: 'text',
          width: '46px',
          tabIndex: 12,
          value: true,
          switchedOffText: '',
          switchedOnText: '',
          onValueChanged: (e: any) => {
            if (e.value) {
              this.document.body.classList.add('light-mode');
              this.document.body.classList.remove('dark-mode');
            } else {
              this.document.body.classList.add('dark-mode');
              this.document.body.classList.remove('light-mode');
            }
          },
        },
        location: 'after',
        name: 'themeSwitch',
        locateInMenu: 'always',
      },
      // Profile Button
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
          tabIndex: 13,
        },
        location: 'after',
        name: 'profileBtn',
        locateInMenu: 'always',
        onClick: () => {
          notify('Profile button has been clicked!');
        },
      },
      // Sign Out Button
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
          tabIndex: 14,
        },
        location: 'after',
        name: 'signOutBtn',
        locateInMenu: 'always',
        onClick: () => {
          notify('Sign out button has been clicked!');
        },
      },
      // User Name
      {
        cssClass: 'user-name',
        elementAttr: { 'aria-label': 'User name display' },
        location: 'after',
        name: 'userName',
        locateInMenu: 'never',
        tabIndex: 15,
        text: `${this.userName}`,
      },
    ];
  }
}

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    ToolbarComponentModule,
    DxButtonModule,
    DxDrawerModule,
    DxListModule,
  ],
  exports: [NavBarComponent],
  declarations: [NavBarComponent],
})
export class NavBarComponentModule {}
