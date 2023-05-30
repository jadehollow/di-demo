import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, NgModule, OnInit, Output, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxPopoverModule, DxTooltipModule } from 'devextreme-angular';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'di-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
})
export class TooltipComponent implements AfterViewInit {
  @Input() target: any;
  @Input() position: string = 'bottom';
  @Input() styleMode: string = 'light';
  @Input() forceVisibleSubject?: BehaviorSubject<boolean>;

  @Output() onShown?: EventEmitter<any>;
  @Output() onHidden?: EventEmitter<any>;

  visible: boolean = false;

  ngAfterViewInit() {
    this.forceVisibleSubject?.subscribe((value) => {
      this.visible = value;
    })
  }
}

@NgModule({
  imports: [CommonModule, DxTooltipModule, DxPopoverModule],
  exports: [TooltipComponent],
  declarations: [TooltipComponent],
})
export class TooltipComponentModule {}