import { Meta, moduleMetadata } from '@storybook/angular';
import { NavBarComponent } from './navbar.component';
import { CommonModule } from '@angular/common';
import { iconNames } from '@mgmt-icon-lib';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import notify from 'devextreme/ui/notify';

export default {
  title: 'NavBarComponent',
  component: NavBarComponent,
  decorators: [
    moduleMetadata({
      declarations: [NavBarComponent, ToolbarComponent],
      imports: [CommonModule],
    }),
  ],
} as Meta<NavBarComponent>;

const userName = 'User Name';

const navbarItems = [
  {
    widget: 'dxButton',
    cssClass: 'drawer-btn',
    options: {
      icon: iconNames['nav-menu'],
      stylingMode: 'text',
      hoverStateEnabled: false,
      focusStateEnabled: false,
      activeStateEnabled: false,
      width: '60px',
      height: '60px',
    },
    location: 'before',
    locateInMenu: 'never',
    onClick: () => {
      notify('Drawer button has been clicked!');
    },
  },
  {
    widget: 'dxButton',
    cssClass: 'dashboard-btn',
    options: {
      icon: iconNames['dashboard'],
      text: 'Dashboard',
      stylingMode: 'text',
      width: '80px',
      height: '67px',
    },
    location: 'before',
    locateInMenu: 'never',
    onClick: () => {
      notify('Dashboard button has been clicked!');
    },
  },
  {
    widget: 'dxButton',
    cssClass: 'alerts-btn',
    options: {
      icon: iconNames['error'],
      text: 'Alerts',
      stylingMode: 'text',
      width: '80px',
      height: '67px',
    },
    location: 'before',
    locateInMenu: 'never',
    onClick: () => {
      notify('Alerts button has been clicked!');
    },
  },
  {
    widget: 'dxButton',
    cssClass: 'policies-btn',
    options: {
      icon: iconNames['protected-entity'],
      text: 'Policies',
      stylingMode: 'text',
      width: '80px',
      height: '67px',
    },
    location: 'before',
    locateInMenu: 'never',
    onClick: () => {
      notify('Policies button has been clicked!');
    },
  },
  {
    widget: 'dxButton',
    cssClass: 'assets-btn',
    options: {
      icon: iconNames['monitor'],
      text: 'Assets',
      stylingMode: 'text',
      width: '80px',
      height: '67px',
    },
    location: 'before',
    locateInMenu: 'never',
    onClick: () => {
      notify('Assets button has been clicked!');
    },
  },
  {
    widget: 'dxButton',
    cssClass: 'reports-btn',
    options: {
      icon: iconNames['log'],
      text: 'Reports',
      stylingMode: 'text',
      width: '80px',
      height: '67px',
    },
    location: 'before',
    locateInMenu: 'never',
    onClick: () => {
      notify('Reports button has been clicked!');
    },
  },
  {
    widget: 'dxButton',
    cssClass: 'logs-btn',
    options: {
      icon: iconNames['book'],
      text: 'Logs',
      stylingMode: 'text',
      width: '80px',
      height: '67px',
    },
    location: 'before',
    locateInMenu: 'never',
    onClick: () => {
      notify('Logs button has been clicked!');
    },
  },
  {
    widget: 'dxButton',
    cssClass: 'settings-btn',
    options: {
      icon: iconNames['settings'],
      text: 'Settings',
      stylingMode: 'text',
      width: '80px',
      height: '67px',
    },
    location: 'before',
    locateInMenu: 'never',
    onClick: () => {
      notify('Settings button has been clicked!');
    },
  },
  {
    widget: 'dxButton',
    cssClass: 'help-btn',
    options: {
      icon: iconNames['help'],
      stylingMode: 'text',
      width: '40px',
    },
    location: 'after',
    locateInMenu: 'never',
    onClick: () => {
      notify('Help button has been clicked!');
    },
  },
  {
    widget: 'dxButton',
    cssClass: 'notification-btn',
    options: {
      icon: iconNames['new-notification'],
      stylingMode: 'text',
      width: '40px',
    },
    location: 'after',
    locateInMenu: 'never',
    onClick: () => {
      notify('Notifications button has been clicked!');
    },
  },
  {
    widget: 'dxButton',
    cssClass: 'user-btn',
    options: {
      icon: iconNames['user'],
      stylingMode: 'text',
      width: '40px',
    },
    location: 'after',
    locateInMenu: 'never',
    onClick: () => {
      notify('User button has been clicked!');
    },
  },
  {
    cssClass: 'user-name',
    location: 'after',
    locateInMenu: 'never',
    text: `${userName}`,
  },
];

export const Primary = {
  render: (args: NavBarComponent) => ({
    props: args,
  }),
  args: {
    toolbarItems: navbarItems,
    userName: userName,
  },
};
