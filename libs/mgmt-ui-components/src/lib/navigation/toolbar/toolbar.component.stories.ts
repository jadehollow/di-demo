import { Meta, moduleMetadata } from '@storybook/angular';
import { ToolbarComponent } from './toolbar.component';
import { CommonModule } from '@angular/common';
import { DxToolbarModule } from 'devextreme-angular';
import { iconNames } from '@mgmt-icon-lib';
import notify from 'devextreme/ui/notify';

export default {
  title: 'ToolbarComponent',
  component: ToolbarComponent,
  decorators: [
    moduleMetadata({
      declarations: [ToolbarComponent],
      imports: [CommonModule, DxToolbarModule],
    }),
  ],
} as Meta<ToolbarComponent>;

const toolbarItems = [
  {
    widget: 'dxButton',
    options: {
      icon: iconNames['edit'],
      stylingMode: 'text',
      text: 'No focus',
      focusStateEnabled: false,
      width: '140px',
      height: '60px',
    },
    location: 'before',
    locateInMenu: 'never',
    onClick: () => {
      notify('Edit button has been clicked!');
    },
  },
  {
    widget: 'dxButton',
    options: {
      icon: iconNames['edit-off'],
      stylingMode: 'text',
      text: 'No hover',
      hoverStateEnabled: false,
      width: '125px',
      height: '60px',
    },
    location: 'before',
    locateInMenu: 'never',
    onClick: () => {
      notify('Edit-off button has been clicked!');
    },
  },
  {
    widget: 'dxButton',
    options: {
      icon: iconNames['reset'],
      hint: 'Go to dashboard',
      stylingMode: 'text',
      text: 'Default',
      width: '110px',
      height: '60px',
    },
    location: 'center',
    locateInMenu: 'never',
    onClick: () => {
      notify('Reset button has been clicked!');
    },
  },
  {
    widget: 'dxButton',
    options: {
      icon: iconNames['refresh'],
      stylingMode: 'outline',
      text: 'Outline',
      width: '110px',
      height: '60px',
    },
    location: 'center',
    locateInMenu: 'never',
    onClick: () => {
      notify('Refresh button has been clicked!');
    },
  },
  {
    widget: 'dxButton',
    options: {
      icon: iconNames['enable'],
      stylingMode: 'contained',
      text: 'Success',
      type: 'success',
      width: '120px',
      height: '60px',
    },
    location: 'after',
    locateInMenu: 'always',
    onClick: () => {
      notify('Enable button has been clicked!');
    },
  },
  {
    widget: 'dxButton',
    options: {
      icon: iconNames['disable'],
      stylingMode: 'contained',
      text: 'Danger',
      type: 'danger',
      width: '120px',
      height: '60px',
    },
    location: 'after',
    locateInMenu: 'always',
    onClick: () => {
      notify('Disable button has been clicked!');
    },
  },
];

export const Primary = {
  render: (args: ToolbarComponent) => ({
    props: args,
  }),
  args: {
    toolbarItems: toolbarItems,
  },
};
