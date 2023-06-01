import { Meta } from '@storybook/angular';
import { HelpComponent } from './help.component';

export default {
  title: 'HelpComponent',
  component: HelpComponent,
} as Meta<HelpComponent>;

export const Primary = (args: HelpComponent) => ({
  props: args,
  template: `
    <di-help class="light-mode">This is a helpful tip!</di-help>
  `,
  args: {},
});