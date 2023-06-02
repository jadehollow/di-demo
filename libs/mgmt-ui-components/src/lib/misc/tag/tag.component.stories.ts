import { Meta } from '@storybook/angular';
import { TagComponent } from './tag.component';

export default {
  title: 'TagComponent',
  component: TagComponent,
} as Meta<TagComponent>;

export const Small = (args: TagComponent) => ({
  props: args,
  template: `
    <di-tag>Tag</di-tag>
  `,
  args: {},
});

export const SmallWithDot = (args: TagComponent) => ({
  props: args,
  template: `
    <di-tag [showDot]="true">Tag</di-tag>
  `,
  args: {},
});

export const SmallWithClose = (args: TagComponent) => ({
  props: args,
  template: `
    <di-tag [showClose]="true">Tag</di-tag>
  `,
  args: {},
});

export const SmallWithBoth = (args: TagComponent) => ({
  props: args,
  template: `
    <di-tag [showDot]="true" [showClose]="true">Tag</di-tag>
  `,
  args: {},
});

export const Medium = (args: TagComponent) => ({
  props: args,
  template: `
    <di-tag size="md">Tag</di-tag>
  `,
  args: {},
});

export const MediumWithDot = (args: TagComponent) => ({
  props: args,
  template: `
    <di-tag size="md" [showDot]="true">Tag</di-tag>
  `,
  args: {},
});

export const MediumWithClose = (args: TagComponent) => ({
  props: args,
  template: `
    <di-tag size="md" [showClose]="true">Tag</di-tag>
  `,
  args: {},
});

export const MediumWithBoth = (args: TagComponent) => ({
  props: args,
  template: `
    <di-tag size="md" [showDot]="true" [showClose]="true">Tag</di-tag>
  `,
  args: {},
});

export const Large = (args: TagComponent) => ({
  props: args,
  template: `
    <di-tag size="lg">Tag</di-tag>
  `,
  args: {},
});

export const LargeWithDot = (args: TagComponent) => ({
  props: args,
  template: `
    <di-tag size="lg" [showDot]="true">Tag</di-tag>
  `,
  args: {},
});

export const LargeWithClose = (args: TagComponent) => ({
  props: args,
  template: `
    <di-tag size="lg" [showClose]="true">Tag</di-tag>
  `,
  args: {},
});

export const LargeWithBoth = (args: TagComponent) => ({
  props: args,
  template: `
    <di-tag size="lg" [showDot]="true" [showClose]="true">Tag</di-tag>
  `,
  args: {},
});