import { Meta, moduleMetadata } from '@storybook/angular';
import { RadioComponent } from './radio.component';
import { DxRadioGroupModule } from 'devextreme-angular';
import { CommonModule } from '@angular/common';

export default {
  title: 'RadioComponent',
  component: RadioComponent,
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with Storybook
      declarations: [RadioComponent, ],
      imports: [CommonModule, DxRadioGroupModule],
    }),
  ]
} as Meta<RadioComponent>;

export const Secondary = {
  render: (args: RadioComponent) => ({
    props: args,
  }),
  args: {
    items: ['a', 'b', 'c'],
    value: 'a',
    displayExpr: 'Test'
  },
};
