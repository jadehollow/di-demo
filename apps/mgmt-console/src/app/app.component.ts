import { Component, Inject, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import notify from 'devextreme/ui/notify';
import { NotificationType } from '@mgmt-ui-components/notifications';
import { iconNames } from '@mgmt-icon-lib';
import { DxDrawerComponent } from 'devextreme-angular';
import { Router } from '@angular/router';
import { testTree } from './test-tree';

@Component({
  selector: 'di-saas-fe-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild(DxDrawerComponent, { static: false }) drawer!: DxDrawerComponent;

  title = 'mgmt-console';

  // Checkbox
  chkboxName = 'testChkbox';
  darkModeLabel = 'Dark mode';
  lightModeLabel = 'Light mode';
  lightModeId = 'lightMode';
  darkModeId = 'darkMode';
  isFalse = false;
  isNull = null;
  isTrue = true;
  tabindex = 1;

  // Nav Drawer
  selectedOpenMode: string = 'overlap';
  selectedPosition: string = 'left';
  selectedRevealMode: string = 'slide';
  isDrawerOpen: boolean = false;
  navDrawer: any;

  // Tabs
  tabs = [
    { text: 'a' },
    { text: 'b' },
    { text: 'c' },
    { text: 'd' },
    { text: 'e' },
    { text: 'f' },
    { text: 'g' },
    { text: 'h' },
    { text: 'i' },
  ];

  // Toggle
  toggleId = 'toggleId';
  toggleValue = false;
  isDisabled = false;
  isReadOnly = false;

  // Tree view
  testTree = testTree;

  // Toast Notification
  showNotification = false;
  notificationType: NotificationType = NotificationType.INFO;
  NotificationType = NotificationType;
  showToastAction = false;
  showFullPageError = false;

  constructor(
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.document.body.classList.add('light-mode');
    this.navDrawer = [
      {
        id: 1,
        text: 'YOUR PRODUCTS',
        tabIndex: 0,
        elementAttr: { 'aria-label': 'Your products' },
        activeStateEnabled: false,
      },
      {
        id: 2,
        text: 'Endpoint Security',
        icon: iconNames['shield-endpoint'],
        tabIndex: 1,
        elementAttr: { 'aria-label': 'Go to endpoint security' },
        onClick: () => {
          this.router.navigateByUrl('/mgmt-dashboard');
        },
      },
      {
        id: 3,
        text: 'Application Security',
        icon: iconNames['shield-application'],
        tabIndex: 2,
        elementAttr: { 'aria-label': 'Go to application security' },
        onClick: () => {
          this.router.navigateByUrl('/');
        },
      },
      {
        id: 4,
        text: 'Storage Security',
        icon: iconNames['shield-storage'],
        tabIndex: 3,
        elementAttr: { 'aria-label': 'Go to storage security' },
        onClick: () => {
          this.router.navigateByUrl('/mgmt-dashboard');
        },
      },
      {
        id: 5,
        html: '<a href="https://www.deepinstinct.com" target="_blank">www.DeepInstinct.com</a>',
        icon: iconNames['open-in-new'],
        tabIndex: 4,
        elementAttr: { 'aria-label': 'Go to logs page' },
      },
    ];
  }

  capitalize = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

  chkboxClick1 = (e: any) => {
    if (e.value) {
      this.document.body.classList.add('light-mode');
      this.document.body.classList.remove('dark-mode');
    } else {
      this.document.body.classList.add('dark-mode');
      this.document.body.classList.remove('light-mode');
    }
    const chkboxName = e.component.option('name');
    notify(`The ${this.capitalize(chkboxName)} checkbox was clicked`);
  };

  chkboxClick2 = (e: any) => {
    if (e.value) {
      this.document.body.classList.add('dark-mode');
      this.document.body.classList.remove('light-mode');
    } else {
      this.document.body.classList.add('light-mode');
      this.document.body.classList.remove('dark-mode');
    }
    const chkboxName = e.component.option('name');
    notify(`The ${this.capitalize(chkboxName)} checkbox was clicked`);
  };

  onDrawerClick = (e: any) => (this.isDrawerOpen = !this.isDrawerOpen);

  log = (e: any) => {
    console.log(e);
  };

  toastAddNotification = (notificationType: NotificationType) => {
    this.showToastAction = !this.showToastAction;
    if (notificationType === this.notificationType || !this.showNotification) {
      this.showNotification = !this.showNotification;
    }
    this.notificationType = notificationType;
  };

  errorAddNotification = () => {
    this.showFullPageError = !this.showFullPageError;
  };
}
