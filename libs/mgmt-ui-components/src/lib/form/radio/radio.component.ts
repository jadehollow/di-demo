import { CommonModule } from '@angular/common';
import { NgModule, Component, EventEmitter, Input, Output } from '@angular/core';
import { DxRadioGroupModule } from 'devextreme-angular';

@Component({
  selector: 'di-radiobutton',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
})
export class DiRadioComponent{
  @Input() items: any[];
  @Input() displayExpr?: string;
  @Input() value: any;
  @Input() size: 'sm' | 'md';
  @Input() layout: string;
  @Input() disabled: boolean;
  @Output() onValueChanged: EventEmitter<any> = new EventEmitter<any>();
  @Input() ariaLabel: string | undefined;
  @Output() valueChange = new EventEmitter();

  constructor() {
    this.items = [];
    this.value = undefined;
    this.size = 'md';
    this.layout = 'vertical';
    this.disabled = false;
  }

  handleValueChanged(event: any) {
    if(this.onValueChanged) {
      this.value = event.value;
      this.valueChange.emit(this.value);
      this.onValueChanged.emit(event);
    }
  }
}

@NgModule({
  imports: [CommonModule, DxRadioGroupModule],
  exports: [DiRadioComponent],
  declarations: [DiRadioComponent]
})
export class RadioComponentModule {}
