import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, Input, NgModule, OnInit, ViewChild } from '@angular/core';
import { TooltipComponentModule } from '../tooltip/tooltip.component';
import { BehaviorSubject, Subject } from 'rxjs';
import { MgmtIconLibModule } from "@mgmt-icon-lib";

@Component({
  selector: 'di-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss'],
})
export class HelpComponent {
  @ViewChild('helpTarget') helpTarget?: ElementRef;
  
  @Input() ariaLabel: string = '';
  @Input() ariaLabelledBy: string = '';
}

@NgModule({
  imports: [CommonModule, TooltipComponentModule, MgmtIconLibModule],
  exports: [HelpComponent],
  declarations: [HelpComponent],
})
export class HelpComponentModule {}