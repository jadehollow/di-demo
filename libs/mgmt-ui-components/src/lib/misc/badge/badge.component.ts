import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';
import { MgmtIconLibModule } from '@mgmt-icon-lib';

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
  @Input() label: string = '';
}

@NgModule({
  imports: [CommonModule, MgmtIconLibModule],
  exports: [BadgeComponent],
  declarations: [BadgeComponent],
})
export class BadgeComponentModule {}
