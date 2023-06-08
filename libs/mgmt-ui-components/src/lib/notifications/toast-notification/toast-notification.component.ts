import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, NgModule, Output, ViewEncapsulation } from '@angular/core';
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
  encapsulation: ViewEncapsulation.None,
})
export class ToastNotificationComponent {
  @Input() notificationType: NotificationType = NotificationType.INFO;
  @Input() my: string = 'top right';
  @Input() at: string = 'top right';
  @Input() of: string = '';
  @Input() notificationTitle: string = '';
  @Input() notificationDescription: string = '';
  @Input() visible: boolean = false;
  @Input() displayTime = 3500;
  @Input() showAction: boolean = false;
  @Input() actionText: string = '';

  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() takeAction: EventEmitter<void> = new EventEmitter();

  toastIcon = {
    [NotificationType.INFO]: 'info-feature',
    [NotificationType.WARNING]: 'warning-feature',
    [NotificationType.ERROR]: 'warning-feature',
    [NotificationType.SUCCESS]: 'check',
  }

  NotificationType = NotificationType

  close() {
    this.visible = false;
    this.visibleChange.emit(false);
  }

}

@NgModule({
  imports: [CommonModule, DxToastModule, MgmtIconLibModule],
  exports: [ToastNotificationComponent],
  declarations: [ToastNotificationComponent]
})
export class ToastNotificationComponentModule {}
