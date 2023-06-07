import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import notify from 'devextreme/ui/notify';

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

  // Toggle
  toggleId = 'toggleId';
  toggleValue = false;
  isDisabled = false;
  isReadOnly = false;

  // Toast Notification
  showNotification = false;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.document.body.classList.add('light-mode');
  }

  capitalize = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

  chkboxClick1 = (e: any) => {
    if(e.value) {
      this.document.body.classList.add('light-mode');
      this.document.body.classList.remove('dark-mode');
    }
    else {
      this.document.body.classList.add('dark-mode');
      this.document.body.classList.remove('light-mode');
    }
    const chkboxName = e.component.option('name');
    notify(`The ${this.capitalize(chkboxName)} checkbox was clicked`);
  };

  chkboxClick2 = (e: any) => {
    if(e.value) {
      this.document.body.classList.add('dark-mode');
      this.document.body.classList.remove('light-mode');
    }
    else {
      this.document.body.classList.add('light-mode');
      this.document.body.classList.remove('dark-mode');
    }
    const chkboxName = e.component.option('name');
    notify(`The ${this.capitalize(chkboxName)} checkbox was clicked`);
  };

  toastAddNotification = () => {
    console.log("add toast");
    this.showNotification = !this.showNotification;
  }
}
