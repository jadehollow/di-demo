import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, Input, NgModule, OnInit, ViewChild } from '@angular/core';
import { TooltipComponentModule } from '../tooltip/tooltip.component';
import { BehaviorSubject, Subject } from 'rxjs';
import { MgmtIconLibModule } from "@mgmt-icon-lib";
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'di-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HelpComponent {
  @ViewChild('helpTarget') helpTarget?: ElementRef;

  @Input() styleMode: string = 'light';

  forceVisibleSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
  selected: boolean = false;

  onClick() {
    this.selected = !this.selected;
    this.forceVisibleSubject?.next(this.selected);
  }

  onHover(event: any) {
    this.forceVisibleSubject?.next(event || this.selected);
  }
}

@NgModule({
  imports: [CommonModule, TooltipComponentModule, MgmtIconLibModule],
  exports: [HelpComponent],
  declarations: [HelpComponent],
})
export class HelpComponentModule {}