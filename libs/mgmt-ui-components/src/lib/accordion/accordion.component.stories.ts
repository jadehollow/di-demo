import { Meta, moduleMetadata } from '@storybook/angular';
import { AccordionComponent } from './accordion.component';
import { CommonModule } from '@angular/common';
import { DxTemplateHost, DxTemplateModule } from 'devextreme-angular';

export default {
  title: 'AccordionComponent',
  component: AccordionComponent,
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with Storybook
      declarations: [AccordionComponent, ],
      imports: [CommonModule, DxTemplateModule],
    }),
  ]
} as Meta<AccordionComponent>;

export const Primary = {
  render: (args: AccordionComponent) => ({
    props: args,
  }),
  args: {
    multiple: true,
    collapsible: true,
    accordionItems:  [
      {icon: 'sliders', title: 'title 1', badges: ['badge 1', 'badge 2', 'badge 3'], html: '<div class="asdf">hello<div>'},
      {icon: 'analysis', hasOpenInNew: true, title: 'title 2', html: '<div>hello<div>'},
      {title: 'title 3', html: '<div>hello<div>'},
    ]
  },
};