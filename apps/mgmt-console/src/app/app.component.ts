import { Component } from '@angular/core';
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

  capitalize = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);
  
  chkboxClick = (e: any) => {
    const chkboxName = e.component.option('name');
    notify(`The ${this.capitalize(chkboxName)} checkbox was clicked`);
  };
}
