import { Meta, moduleMetadata } from '@storybook/angular';
import { BadgeComponent } from './badge.component';
import { CommonModule } from '@angular/common';
import { DiIconComponent } from 'libs/mgmt-icon-lib/src/lib/di-icon/di-icon.component';

export default {
  title: 'BadgeComponent',
  component: BadgeComponent,
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with Storybook
      declarations: [BadgeComponent, DiIconComponent],
      imports: [CommonModule],
    }),
  ]
} as Meta<BadgeComponent>;

export const Primary = {
  render: (args: BadgeComponent) => ({
    props: args,
  }),
  args: {
    size: 'lg',
    icon: 'dot',
    risk: 'Good',
    outline: false,
    default: 'Default',
    label: 'primary badge',
    iconTrailing: false
  },
};
