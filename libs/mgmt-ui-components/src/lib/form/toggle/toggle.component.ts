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
  @Input() disabled?: boolean = false;
  @Input() readOnly?: boolean = false;
  @Input() ariaLabel?: string;
  @Input() ariaLabelledBy?: string;
  @Input() value: boolean = false;
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  @Output() onValueChanged = new EventEmitter<any>();

  handle = (e: any) => {
    // console.log(e.value); // e.value is the output (true/false)
    this.onValueChanged.emit(e);
  };

  // @Output() onchange: EventEmitter<ToggleOnChangeEvent> = new EventEmitter();

  // modelValue: any = false;

  // focused = false;

  // onModelChange: Function = () => {};

  // onModelTouched: Function = () => {};

  // constructor(private cd: ChangeDetectorRef) {}

  // onClick(event: Event, cb: HTMLInputElement) {
  //   if (!this.disabled && !this.readonly) {
  //     event.preventDefault();
  //     this.toggle(event);
  //     cb.focus();
  //   }
  // }

  // onInputChange(event: Event) {
  //   if (!this.readonly) {
  //     const inputChecked = (<HTMLInputElement>event.target).checked;
  //     this.updateModel(event, inputChecked);
  //   }
  // }

  // toggle(event: Event) {
  //   this.updateModel(event, !this.checked());
  // }

  // updateModel(event: Event, value: boolean) {
  //   this.modelValue = value ? this.trueValue : this.falseValue;
  //   this.onModelChange(this.modelValue);
  //   this.onchange.emit({
  //     originalEvent: event,
  //     checked: this.modelValue,
  //   });
  // }

  // onFocus(event: Event) {
  //   this.focused = true;
  // }

  // onBlur(event: Event) {
  //   this.focused = false;
  //   this.onModelTouched();
  // }

  // writeValue(value: any): void {
  //   this.modelValue = value;
  //   this.cd.markForCheck();
  // }

  // registerOnChange(fn: Function): void {
  //   this.onModelChange = fn;
  // }

  // registerOnTouched(fn: Function): void {
  //   this.onModelTouched = fn;
  // }

  // setDisabledState(val: boolean): void {
  //   this.disabled = val;
  //   this.cd.markForCheck();
  // }

  // checked() {
  //   return this.modelValue === this.trueValue;
  // }
}

@NgModule({
  imports: [CommonModule, BrowserModule, DxSwitchModule],
  exports: [ToggleComponent],
  declarations: [ToggleComponent],
})
export class ToggleComponentModule {}