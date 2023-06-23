import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, NgModule, Output, ViewEncapsulation } from '@angular/core';
import { MgmtIconLibModule } from '@mgmt-icon-lib';
import { DxToastModule } from 'devextreme-angular';
import { NotificationType } from '../toast-notification/toast-notification.component';

@Component({
  selector: 'di-full-page-error',
  templateUrl: './full-page-error.component.html',
  styleUrls: ['./full-page-error.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FullPageErrorComponent {
  @Input() notificationType: NotificationType = NotificationType.ERROR;
  @Input() my: string = 'bottom';
  @Input() at: string = 'bottom';
  @Input() of: string = '';
  @Input() errorText: string = '';
  @Input() visible: boolean = false;
  @Input() displayTime = 7000;

  @Output() visibleChange = new EventEmitter<boolean>();
}

@NgModule({
  imports: [CommonModule, DxToastModule, MgmtIconLibModule],
  exports: [FullPageErrorComponent],
  declarations: [FullPageErrorComponent]
})
export class FullPageErrorComponentModule {}

