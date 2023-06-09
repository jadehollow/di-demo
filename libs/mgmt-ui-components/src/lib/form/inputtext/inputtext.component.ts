import { CommonModule } from '@angular/common';
import { NgModule, Component, EventEmitter, Input, Output } from '@angular/core';
import { DxTextBoxModule } from 'devextreme-angular';
import { MgmtIconLibModule } from '@mgmt-icon-lib'

@Component({
  selector: 'di-inputtext',
  templateUrl: './inputtext.component.html',
  styleUrls: ['./inputtext.component.scss'],
})
export class DiInputtextComponent {
  @Input() placeholder: string;
  @Input() value: string;
  @Input() leftIcon: string;
  @Input() hint: string;
  @Input() error: string;
  @Output() valueChange = new EventEmitter();
  @Output() onValueChanged: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.placeholder = '';
    this.value = '';
    this.leftIcon = '';
    this.error = '';
    this.hint = '';
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
  imports: [CommonModule, DxTextBoxModule, MgmtIconLibModule],
  exports: [DiInputtextComponent],
  declarations: [DiInputtextComponent]
})
export class DiInputtextComponentModule {}