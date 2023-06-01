import { Meta } from '@storybook/angular';
import { TooltipComponent } from './tooltip.component';

export default {
  title: 'TooltipComponent',
  component: TooltipComponent,
} as Meta<TooltipComponent>;

export const Primary = (args: TooltipComponent) => ({
  props: args,
  template: `
    <span id="target">Mouse over me!</span>
    <di-tooltip target="#target">This is a helpful tip!</di-tooltip>
  `,
  args: {},
});
