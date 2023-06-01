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
  @Input() ariaLabel?: string;
  @Input() ariaLabelledBy?: string;
  @Input() id?: string;
  // For a small checkbox, pass 16 to the iconSize property.
  // For a medium checkbox, pass 20 to the iconSize property.
  @Input() iconSize?: number | string;
  @Input() isDisabled!: boolean;
  @Input() name!: string;
  @Input() text?: string;
  @Input() tabindex?: number;
  @Input() validationStatus?: string;
  // For a checked checkbox, pass true as the value.
  // For an unchecked checkbox, pass false as the value.
  // For a checkbox in an indeterminate state, pass null as the value.
  @Input() value?: boolean | null;
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
