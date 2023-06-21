import {Component, Inject} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import notify from 'devextreme/ui/notify';
import { NotificationType } from '@mgmt-ui-components/notifications';
import { iconNames } from '@mgmt-icon-lib';
import { testTree } from './test-tree';

@Component({
  selector: 'di-saas-fe-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
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
  ]

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

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.document.body.classList.add('light-mode');
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

  log = (e: any) => {
    console.log(e);
  }

  toastAddNotification = (notificationType: NotificationType) => {
    this.showToastAction = !this.showToastAction;
    if (notificationType === this.notificationType || !this.showNotification) {
      this.showNotification = !this.showNotification;
    }
    this.notificationType = notificationType;
  }

  errorAddNotification = () => {
    this.showFullPageError = !this.showFullPageError;
  }
}
