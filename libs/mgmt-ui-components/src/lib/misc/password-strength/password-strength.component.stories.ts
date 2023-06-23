import { Meta, moduleMetadata } from '@storybook/angular';
import { DiIconComponent } from '@mgmt-icon-lib';
import { PasswordStrengthComponent } from './password-strength.component';

export default {
  title: 'PasswordStrengthComponent',
  component: PasswordStrengthComponent,
  decorators: [
    moduleMetadata({
      declarations: [DiIconComponent]
    })
  ]
} as Meta<PasswordStrengthComponent>;

export const Primary = {
  args: {
    password: 'Testingstuff'
  },
};