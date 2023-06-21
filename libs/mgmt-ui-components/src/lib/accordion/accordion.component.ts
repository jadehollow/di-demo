import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, NgModule, Output } from '@angular/core';
import { DiIconComponent } from '@mgmt-icon-lib';
import {
  DxAccordionModule, DxCheckBoxModule, DxSliderModule, DxTagBoxModule, DxTemplateModule 
} from 'devextreme-angular';
import { BadgeComponent } from '../misc/badge/badge.component';

@Component({
  selector: 'di-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent {
  @Input() tabindex?: number;
  @Input() inputId?: string;
  @Input() ariaLabel?: string;
  @Input() ariaLabelledBy?: string;
  @Input() accordionItems: any[] = [];
  @Input() collapsible: boolean = true;
  @Input() multiple: boolean = true;
  @Output() openInNew = new EventEmitter<any>();

  constructor() {

  }

  public openInNewClicked($event: any) {
    this.openInNew.emit($event);
  }

}


@NgModule({
  imports: [
    CommonModule,
    DxAccordionModule,
    DxTemplateModule,
  ],
  declarations: [AccordionComponent, DiIconComponent, BadgeComponent],
  bootstrap: [AccordionComponent],
})
export class AppModule { }