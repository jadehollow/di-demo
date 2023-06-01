import { CommonModule } from '@angular/common';
import { NgModule, Component, EventEmitter, Output, Input, forwardRef } from '@angular/core';
import { DxRadioGroupModule } from 'devextreme-angular';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'di-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
})
export class RadioComponent {
  @Input() items: any[];
  @Input() displayExpr: string;
  value = '';
  //@Output() onValueChanged: EventEmitter<RadioButtonClickEvent> = new EventEmitter<RadioButtonClickEvent>();
  @Input() ariaLabel: string | undefined;

  constructor() {
    this.items = [];
    this.displayExpr = '';
  }
}

@NgModule({
  imports: [CommonModule, DxRadioGroupModule],
  exports: [RadioComponent],
  declarations: [RadioComponent]
})
export class RadioComponentModule {}
