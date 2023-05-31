import { Meta } from '@storybook/angular';
import { CheckboxComponent } from './checkbox.component';

export default {
  title: 'CheckboxComponent',
  component: CheckboxComponent,
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
