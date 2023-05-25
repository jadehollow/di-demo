import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxPopoverModule, DxTooltipModule } from 'devextreme-angular';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
})
export class TooltipComponent {
  @Input() target: any;
  @Input() position?: string;
}

@NgModule({
  imports: [CommonModule, DxTooltipModule, DxPopoverModule],
  exports: [TooltipComponent],
  declarations: [TooltipComponent],
})
export class TooltipComponentModule {}