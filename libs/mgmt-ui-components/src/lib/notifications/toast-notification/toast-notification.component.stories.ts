import { Meta, moduleMetadata } from '@storybook/angular';
import { ToastNotificationComponent } from './toast-notification.component';
import { CommonModule } from '@angular/common';
import { DxToastModule } from 'devextreme-angular';
import { MgmtIconLibModule } from '@mgmt-icon-lib';

export default {
  title: 'ToastNotificationComponent',
  component: ToastNotificationComponent,
  decorators: [
    moduleMetadata({
      declarations: [ ToastNotificationComponent ],
      imports: [ CommonModule, DxToastModule, MgmtIconLibModule ],
    })
  ],
  args: {
    visible: false,
    showAction: false,
    notificationDescription: 'Test description',
    actionText: 'Optional action',
    of: '#storybook-root',
  }
} as Meta<ToastNotificationComponent>;

export const Info = {
  args: {
    notificationTitle: 'Info Notification',
    notificationType: 'info',
  },
};

export const Warning = {
  args: {
    notificationTitle: 'Warning Notification',
    notificationType: 'warning',
  },
};

export const Error = {
  args: {
    notificationTitle: 'Error Notification',
    notificationType: 'error',
  },
};

export const Success = {
  args: {
    notificationTitle: 'Success Notification',
    notificationType: 'success',
  },
};