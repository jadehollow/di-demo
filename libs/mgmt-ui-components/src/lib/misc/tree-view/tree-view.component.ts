import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, NgModule, Output, ViewChild } from '@angular/core';
import { MgmtIconLibModule } from '@mgmt-icon-lib';
import { DxTreeViewComponent, DxTreeViewModule } from 'devextreme-angular';
import { ButtonComponentModule } from '../../button/button/button.component';
import { Pipe, PipeTransform } from '@angular/core';
import { BadgeComponentModule } from '../badge/badge.component';

enum ControlMode {
  ACCESS = 'access',
  DROPDOWN = 'dropdown',
  MINIMAL = 'minimal'
}

@Pipe({
  name: 'treeViewItemSum'
})
export class TreeViewItemSumPipe implements PipeTransform {
  getSum(item: any) {
    let sum = 0;
    if (item.items) {
      item.items?.forEach((subItem: any) => {
        sum += this.getSum(subItem);
      })
    }
    else {
      sum = item.tableItems
    }
    if (!sum) {
      return 1;
    }
    return sum;
  }

  transform(item: any): number {
    return this.getSum(item);
  }
}

@Component({
  selector: 'di-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss'],
})
export class TreeViewComponent {
  @ViewChild(DxTreeViewComponent, { static: false}) treeView!: DxTreeViewComponent;

  @Input() items: any[] = [];
  @Input() width: string = '300px';
  @Input() height: string = '100vh';
  @Input() title: string = '';
  @Input() collapsed: boolean = false;
  @Input() controlMode: ControlMode = ControlMode.ACCESS;

  @Output() onItemClick = new EventEmitter<any>();

  ControlMode = ControlMode;

  toggleNode(item: any) {
    if (item.expanded) {
      this.treeView.instance.collapseItem(item.id);
    }
    else {
      this.treeView.instance.expandItem(item.id);
    }
  }

  toggleTreeControl() {
    this.collapsed = !this.collapsed;
  }
  
  expandAll() {
    this.treeView.instance.expandAll();
  }

  collapseAll() {
    this.treeView.instance.collapseAll();
  }
}

@NgModule({
  imports: [CommonModule, DxTreeViewModule, MgmtIconLibModule, ButtonComponentModule, BadgeComponentModule],
  exports: [TreeViewComponent],
  declarations: [TreeViewComponent, TreeViewItemSumPipe],
})
export class TreeViewComponentModule {}