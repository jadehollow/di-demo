import { Meta } from '@storybook/angular';
import { DiIconComponent } from './di-icon.component';

export default {
  title: 'DiIconComponent',
  component: DiIconComponent,
} as Meta<DiIconComponent>;

export const Icons = {
  render: (args: DiIconComponent) => {
    return ({
      props: args,
    });
  },
  args: {
    name: 'action',
    size: 'md',
  },
};
