import { Meta, moduleMetadata } from '@storybook/angular';
import { TabsComponent } from './tabs.component';
import { iconNames } from '@mgmt-icon-lib';
import { CommonModule } from '@angular/common';
import { DxTabsComponent } from 'devextreme-angular';

export default {
  title: 'TabsComponent',
  component: TabsComponent,
  decorators: [
    moduleMetadata({
      declarations: [DxTabsComponent],
      imports: [CommonModule],
    })
  ],
  render: (args: TabsComponent) => ({
    props: {
      ...args
    },
  }),
} as Meta<TabsComponent>;

const tabs = [
  { text: 'a'},
  { text: 'b' },
  { text: 'c' },
  { text: 'd' },
  { text: 'e' },
  { text: 'f' },
  { text: 'g' },
]

const iconTabs = [
  { text: 'Dashboard', icon: iconNames.action },
  { text: 'Alerts', icon: iconNames.add },
  { text: 'Policies', icon: iconNames['add-new'] },
  { text: 'Assets', icon: iconNames['add-circle'] },
  { text: 'Reports', icon: iconNames['add-file'] },
  { text: 'Logs', icon: iconNames.analysys },
  { text: 'Settings', icon: iconNames['add-application'] },
]

export const Normal = {
  args: {
    dataSource: tabs
  },
};

export const Low = {
  args: {
    dataSource: tabs,
    styleMode: 'low'
  },
};

export const Rounded = {
  args: {

    dataSource: tabs,
    styleMode: 'round'
  },
};

export const Icons = {
  args: {
    dataSource: iconTabs,
    styleMode: 'icons',
    iconSize: 'lg'
  },
};