import { Component } from '@angular/core';
import { iconNames } from '../di-icon/di-icon.component';

@Component({
  selector: 'di-saas-fe-di-icon-gallery',
  templateUrl: './di-icon-gallery.component.html',
  styleUrls: ['./di-icon-gallery.component.scss'],
})
export class DiIconGalleryComponent {
  icons = Object.keys(iconNames);
  constructor() {
    console.log(this.icons);
  }
}
