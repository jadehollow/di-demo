import { Meta, moduleMetadata } from '@storybook/angular';
import { DiRadioComponent } from './radio.component';
import { DxRadioGroupModule } from 'devextreme-angular';
import { CommonModule } from '@angular/common';

export default {
  title: 'RadioComponent',
  component: DiRadioComponent,
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with Storybook
      declarations: [DiRadioComponent, ],
      imports: [CommonModule, DxRadioGroupModule],
    }),
  ]
} as Meta<DiRadioComponent>;

const items = [
  {display: 'Option A', value: 'A'},
  {display: 'Option B', value: 'B'},
  {display: 'Option C', value: 'C'}
];

export const Secondary = {
  render: (args: DiRadioComponent) => ({
    props: args,
  }),
  args: {
    items: items,
    value: items[1],
    displayExpr: 'display',
    disabled: false
  },
};
