/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/ban-types */
import {
  NgModule,
  Component,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { DxSwitchModule } from 'devextreme-angular';

@Component({
  selector: 'di-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
})
export class ToggleComponent {
  // Toggle Switch documentation: https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxSwitch/
  @Input() style: any;
  @Input() styleClass = '';
  @Input() tabindex?: number;
  @Input() inputId?: string;
  @Input() name?: string;
  @Input() disabled!: boolean;
  @Input() readOnly!: boolean;
  @Input() ariaLabel?: string;
  @Input() ariaLabelledBy?: string;
  @Input() value!: boolean;
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  @Output() onValueChanged = new EventEmitter<any>();

  handle = (e: any) => {
    this.onValueChanged.emit(e);
  };

  setDisabledState(val: boolean): void {
    this.disabled = val;
  }
}

@NgModule({
  imports: [CommonModule, BrowserModule, DxSwitchModule],
  exports: [ToggleComponent],
  declarations: [ToggleComponent],
})
export class ToggleComponentModule {}
