import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, NgModule, Output } from '@angular/core';
import { DxPopoverModule, DxTooltipModule } from 'devextreme-angular';

@Component({
  selector: 'di-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
})
export class TooltipComponent {
  @Input() target: any;
  @Input() position: string = 'bottom';
  @Input() styleMode: string = 'light';

  @Output() onShown?: EventEmitter<any>;
  @Output() onHidden?: EventEmitter<any>;
}

@NgModule({
  imports: [CommonModule, DxTooltipModule, DxPopoverModule],
  exports: [TooltipComponent],
  declarations: [TooltipComponent],
})
export class TooltipComponentModule {}