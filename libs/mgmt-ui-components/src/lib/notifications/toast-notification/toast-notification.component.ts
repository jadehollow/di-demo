import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';
import { MgmtIconLibModule } from '@mgmt-icon-lib';
import { DxToastModule } from 'devextreme-angular';

export enum NotificationType {
  INFO = 'info',
  WARNING = 'warning',
  ERROR = 'error',
  SUCCESS = 'success'
}

@Component({
  selector: 'di-toast-notification',
  templateUrl: './toast-notification.component.html',
  styleUrls: ['./toast-notification.component.scss'],
})
export class ToastNotificationComponent {
  @Input() notificationType: NotificationType = NotificationType.INFO;
  @Input() my: string = 'top right';
  @Input() at: string = 'top right';
  @Input() of: string = '';
  @Input() actionText: string = '';
  @Input() actionDescription: string = '';
  @Input() isVisible: boolean = false;

  NotificationType = NotificationType

}

@NgModule({
  imports: [CommonModule, DxToastModule, MgmtIconLibModule],
  exports: [ToastNotificationComponent],
  declarations: [ToastNotificationComponent]
})
export class ToastNotificationComponentModule {}
