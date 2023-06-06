import { Meta, moduleMetadata } from '@storybook/angular';
import { ToggleComponent } from './toggle.component';
import { DxSwitchModule } from 'devextreme-angular';
import { CommonModule } from '@angular/common';

export default {
  title: 'ToggleComponent',
  component: ToggleComponent,
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with Storybook
      declarations: [ToggleComponent],
      imports: [DxSwitchModule, CommonModule],
    }),
  ]
} as Meta<ToggleComponent>;

export const Primary = {
  render: (args: ToggleComponent) => ({
    props: args,
  }),
  args: {
    id: '',
    tabIndex: 0,
    value: false
  },
};

export const Disabled = {
  render: (args: ToggleComponent) => ({
    props: args,
  }),
  args: {
    id: '',
    tabIndex: 0,
    value: false,
    disabled: true
  },
};

export const StartTrue = {
  render: (args: ToggleComponent) => ({
    props: args,
  }),
  args: {
    id: '',
    tabIndex: 0,
    value: true,
    disabled: false
  },
};
