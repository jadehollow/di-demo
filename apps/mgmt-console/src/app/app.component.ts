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
  chkboxText = 'Check Me!';
  
  constructor(@Inject(DOCUMENT) private document: Document) { 
    this.document.body.classList.add('light-mode');
  }

  capitalize = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);
  
  chkboxClick = (e: any) => {
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
}
