import { Meta, moduleMetadata } from '@storybook/angular';
import { FullPageErrorComponent } from './full-page-error.component';
import { CommonModule } from '@angular/common';
import { DxToastModule } from 'devextreme-angular';
import { MgmtIconLibModule } from '@mgmt-icon-lib';

export default {
  title: 'FullPageErrorComponent',
  component: FullPageErrorComponent,
  decorators: [
    moduleMetadata({
      declarations: [ FullPageErrorComponent ],
      imports: [ CommonModule, DxToastModule, MgmtIconLibModule ],
    })
  ],
  args: {
    visible: false,
  }
} as Meta<FullPageErrorComponent>;

export const Primary = {
  args: {
    errorText: 'This is an error',
    of: '#storybook-preview-iframe',
  },
};