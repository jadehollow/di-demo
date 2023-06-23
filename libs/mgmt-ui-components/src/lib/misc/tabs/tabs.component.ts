import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, NgModule, Output } from '@angular/core';
import { DxTabsModule } from 'devextreme-angular';

@Component({
  selector: 'di-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent {
  @Input() ariaLabel: string = '';
  @Input() ariaLabelledBy: string = '';
  @Input() dataSource: any = [];
  @Input() width?: any;
  @Input() scrollByContent: boolean = false;
  @Input() showNavButtons: boolean = false;
  @Input() selectedIndex: number = 0;
  @Input() scrollingEnabled = false;
  @Input() styleMode: 'normal' | 'low' | 'round' = 'normal';
  
  @Output() onItemClick = new EventEmitter<any>();
}

@NgModule({
  imports: [CommonModule, DxTabsModule],
  exports: [TabsComponent],
  declarations: [TabsComponent],
})
export class TabsComponentModule {}