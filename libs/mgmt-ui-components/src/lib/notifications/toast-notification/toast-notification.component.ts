import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';
import { DxToastModule } from 'devextreme-angular';

export enum NotificationType {
  INFO = 'info',
  WARNING = 'warning',
  ERROR = 'error',
  SUCCESS = 'success'
}

@Component({
  selector: 'di-saas-fe-toast-notification',
  templateUrl: './toast-notification.component.html',
  styleUrls: ['./toast-notification.component.scss'],
})
export class ToastNotificationComponent {
  @Input() notificationType: NotificationType = NotificationType.INFO;
  


}

@NgModule({
  imports: [CommonModule, DxToastModule],
  exports: [ToastNotificationComponent],
  declarations: [ToastNotificationComponent]
})
export class ToastNotificationComponentModule {}
