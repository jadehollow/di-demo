import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';
import { DiIconComponent } from 'libs/mgmt-icon-lib/src/lib/di-icon/di-icon.component';

@Component({
  selector: 'di-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
})
export class BadgeComponent {
  @Input() tabindex?: number;
  @Input() inputId?: string;
  @Input() ariaLabel?: string;
  @Input() ariaLabelledBy?: string;
  @Input() size: 'sm'|'md'|'lg' = 'sm';
  @Input() icon: string = 'False';
  @Input() iconTrailing: boolean = false;
  @Input() risk: 'None'|'Neutral'|'Good'|'Low'|'Moderate'|'High'|'Critical' = 'None';
  @Input() outline: boolean = false;
  @Input() default: 'Default'|'Selected' = 'Default';
}
