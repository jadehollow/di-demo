import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, NgModule, Output } from '@angular/core';
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
  @Input() visible: boolean = false;
  @Input() displayTime = 3500;

  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() takeAction: EventEmitter<void> = new EventEmitter();

  toastIcon = {
    [NotificationType.INFO]: 'info-feature',
    [NotificationType.WARNING]: 'warning-feature',
    [NotificationType.ERROR]: 'warning-feature',
    [NotificationType.SUCCESS]: 'check',
  }

  NotificationType = NotificationType

}

@NgModule({
  imports: [CommonModule, DxToastModule, MgmtIconLibModule],
  exports: [ToastNotificationComponent],
  declarations: [ToastNotificationComponent]
})
export class ToastNotificationComponentModule {}
