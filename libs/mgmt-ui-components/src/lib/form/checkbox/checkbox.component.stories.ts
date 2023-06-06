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

export const Checked = {
  render: (args: CheckboxComponent) => ({
    props: args,
  }),
  args: {
    iconSize: 20,
    isDisabled: false,
    tabindex: 0,
    text: '',
    value: true,
  },
};

export const Unchecked = {
  render: (args: CheckboxComponent) => ({
    props: args,
  }),
  args: {
    iconSize: 20,
    isDisabled: false,
    tabindex: 0,
    text: '',
    value: false,
  },
};

export const Indeterminate = {
  render: (args: CheckboxComponent) => ({
    props: args,
  }),
  args: {
    iconSize: 20,
    isDisabled: false,
    tabindex: 0,
    text: '',
    value: null,
  },
};

export const Disabled = {
  render: (args: CheckboxComponent) => ({
    props: args,
  }),
  args: {
    iconSize: 20,
    isDisabled: true,
    tabindex: 0,
    text: '',
    value: true,
  },
};
