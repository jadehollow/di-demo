import { CommonModule } from '@angular/common';
import { NgModule, Component, EventEmitter, Output, Input } from '@angular/core';
import { DxCheckBoxModule } from 'devextreme-angular';

@Component({
  selector: 'di-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent {
  // Checkbox API reference: https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxCheckBox/Configuration/
  @Input() iconSize?: number | string;
  @Input() name?: string;
  @Input() tabIndex?: number;
  @Input() text?: string;
  @Input() validationStatus?: string;
  @Input() value?: boolean;
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  @Output() onValueChanged: EventEmitter<string> = new EventEmitter();

  handle (e: any) {
    this.onValueChanged.emit(e);
  }
}

@NgModule({
  imports: [CommonModule, DxCheckBoxModule],
  exports: [CheckboxComponent],
  declarations: [CheckboxComponent]
})
export class CheckboxComponentModule {}
