import { Meta, moduleMetadata } from '@storybook/angular';
import { HelpComponent } from './help.component';
import { DiIconComponent } from '@mgmt-icon-lib';
import { TooltipComponent } from '../tooltip/tooltip.component';

export default {
  title: 'HelpComponent',
  component: HelpComponent,
  decorators: [
    moduleMetadata({
      declarations: [DiIconComponent]
    })
  ]
} as Meta<HelpComponent>;

export const Primary = (args: HelpComponent) => ({
  props: args,
  template: `
    <di-help class="light-mode">This is a helpful tip!</di-help>
  `,
  args: {},
});