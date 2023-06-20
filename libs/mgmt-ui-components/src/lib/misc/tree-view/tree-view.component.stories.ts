import { Meta, moduleMetadata } from '@storybook/angular';
import { ControlMode, TreeViewComponent, TreeViewItemSumPipe } from './tree-view.component';
import { CommonModule } from '@angular/common';
import { DxTreeViewModule } from 'devextreme-angular';
import { MgmtIconLibModule } from '@mgmt-icon-lib';
import { BadgeComponentModule } from '../badge/badge.component';

const testTree = [{
  id: '1',
  text: 'Level 1',
  expanded: true,
  items: [{
    id: '2',
    text: 'Level 2',
    expanded: true,
    items: [{
      id: '3',
      text: 'Level 3',
      items: [{
        id: '4',
        text: 'Level 4',
        items: [{
          id: '5',
          text: 'Level 5',
          items: [{
            id: '6',
            text: 'Level 6',
            items: [{
              id: '7',
              text: 'Level 7',
            }]
          }]
        }]
      }]
    }]
  }]
}];


export default {
  title: 'TreeViewComponent',
  component: TreeViewComponent,
  decorators: [
    moduleMetadata({
      declarations: [ TreeViewComponent, TreeViewItemSumPipe ],
      imports: [ CommonModule, DxTreeViewModule, MgmtIconLibModule, BadgeComponentModule ],
    })
  ],
  args: {
    items: testTree,
    width: '300px',
    height: '300px'
  }
} as Meta<TreeViewComponent>;

export const Primary = {
  args: {
    title: 'Simple example',
    controlMode: ControlMode.ACCESS
  },
};