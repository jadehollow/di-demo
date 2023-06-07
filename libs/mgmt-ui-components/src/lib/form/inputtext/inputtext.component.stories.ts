import { Meta, moduleMetadata } from '@storybook/angular';
import { DiInputtextComponent } from './inputtext.component';
import { DxTextBoxModule } from 'devextreme-angular';
import { CommonModule } from '@angular/common';
import { DiIconComponent } from 'libs/mgmt-icon-lib/src/lib/di-icon/di-icon.component';

export default {
  title: 'DiInputTextComponent',
  component: DiInputtextComponent,
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with Storybook
      declarations: [DiInputtextComponent, DiIconComponent],
      imports: [CommonModule, DxTextBoxModule],
    }),
  ]
} as Meta<DiInputtextComponent>;

export const Demo = {
  render: (args: DiInputtextComponent) => ({
    props: args,
  }),
  args: {
    value: 'John Doe',
    leftIcon: 'add',
    hint: 'Please enter valid email',
    error: 'Email is not valid'
  },
};
