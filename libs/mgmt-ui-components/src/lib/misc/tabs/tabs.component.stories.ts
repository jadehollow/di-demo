import { Meta, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';
import { DxTabsModule } from 'devextreme-angular';
import { MgmtIconLibModule } from '@mgmt-icon-lib';

export default {
  title: 'TabsComponent',
  component: TabsComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule, DxTabsModule, MgmtIconLibModule ],
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
  { text: 'Dashboard', icon: 'add' },
  { text: 'Alerts', icon: 'airplane' },
  { text: 'Policies', icon: 'bookmark' },
  { text: 'Assets', icon: 'box' },
  { text: 'Reports', icon: 'car' },
  { text: 'Logs', icon: 'card' },
  { text: 'Settings', icon: 'cart' },
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