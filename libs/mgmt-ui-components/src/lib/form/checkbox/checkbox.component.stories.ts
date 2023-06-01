import { Meta, moduleMetadata } from '@storybook/angular';
import { CheckboxComponent } from './checkbox.component';
import { CommonModule } from '@angular/common';
import { DxCheckBoxModule } from 'devextreme-angular';

export default {
  title: 'CheckboxComponent',
  component: CheckboxComponent,
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with Storybook
      declarations: [CheckboxComponent, ],
      imports: [CommonModule, DxCheckBoxModule],
    }),
  ]
} as Meta<CheckboxComponent>;

export const Primary = {
  render: (args: CheckboxComponent) => ({
    props: args,
  }),
  args: {
    ariaLabel: '',
    ariaLabelledBy: '',
    iconSize: 20,
    isDisabled: false,
    name: '',
    tabindex: 0,
    text: '',
    validationStatus: '',
    value: false,
  },
};
