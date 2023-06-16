import { Component, Inject, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import notify from 'devextreme/ui/notify';
import { iconNames } from '@mgmt-icon-lib';
import {
  DxDrawerComponent,
} from 'devextreme-angular';

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
  iconTabs = [
    { text: 'Dashboard', icon: iconNames.action },
    { text: 'Alerts', icon: iconNames.add },
    { text: 'Policies', icon: iconNames['add-new'] },
    { text: 'Assets', icon: iconNames['add-circle'] },
    { text: 'Reports', icon: iconNames['add-file'] },
    { text: 'Logs', icon: iconNames.analysys },
    { text: 'Settings', icon: iconNames['add-application'] },
  ];

  // Toggle
  toggleId = 'toggleId';
  toggleValue = false;
  isDisabled = false;
  isReadOnly = false;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.document.body.classList.add('light-mode');
    this.navDrawer = [
      { id: 1, text: 'Products', icon: 'product' },
      { id: 2, text: 'Sales', icon: 'money' },
      { id: 3, text: 'Customers', icon: 'group' },
      { id: 4, text: 'Employees', icon: 'card' },
      { id: 5, text: 'Reports', icon: 'chart' },
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
}
