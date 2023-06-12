import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, NgModule, Output, ViewChild } from '@angular/core';
import { MgmtIconLibModule } from '@mgmt-icon-lib';
import { DxTreeViewComponent, DxTreeViewModule } from 'devextreme-angular';

@Component({
  selector: 'di-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss'],
})
export class TreeViewComponent {
  @ViewChild(DxTreeViewComponent, { static: false}) treeView!: DxTreeViewComponent;

  @Input() items: any[] = [];
  @Input() width: number = 300;

  @Output() onItemClick = new EventEmitter<any>();

  toggleNode(item: any) {
    if (item.expanded) {
      this.treeView.instance.collapseItem(item.id);
    }
    else {
      this.treeView.instance.expandItem(item.id);
    }
  }
}

@NgModule({
  imports: [CommonModule, DxTreeViewModule, MgmtIconLibModule],
  exports: [TreeViewComponent],
  declarations: [TreeViewComponent],
})
export class TreeViewComponentModule {}