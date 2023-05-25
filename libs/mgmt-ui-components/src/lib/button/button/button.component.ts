import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  NgModule,
  Output,
} from '@angular/core';
import { DxButtonModule } from 'devextreme-angular/ui/button';

@Component({
  selector: 'di-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  // Button API reference: https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxButton/Configuration
  @Input() icon?: string;
  @Input() id?: string;
  @Input() stylingMode!: string;
  @Input() tabIndex?: number;
  @Input() text?: string;
  @Input() type?: string;
  @Input() useSubmitBehavior?: boolean;
  @Input() validationGroup?: string;
  @Input() width!: string | number;
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  @Output() onClick = new EventEmitter<any>();

  handle = (e: any) => {
    this.onClick.emit(e);
  };
}

@NgModule({
  imports: [CommonModule, DxButtonModule],
  exports: [ButtonComponent],
  declarations: [ButtonComponent],
})
export class ButtonComponentModule {}
