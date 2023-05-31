import { Component } from '@angular/core';
import { iconNames } from '../di-icon/di-icon.component';

@Component({
  selector: 'di-saas-fe-di-icon-gallery',
  templateUrl: './di-icon-gallery.component.html',
  styleUrls: ['./di-icon-gallery.component.scss'],
})
export class DiIconGalleryComponent {
  allIcons = Object.keys(iconNames);
  displayIcons = Object.keys(iconNames);
  public searchString = '';
  constructor() {
    console.log(this.displayIcons);
  }

  updateFilter($event: any): void {
    this.searchString = $event.target.value
    console.log($event.target.value);
    this.displayIcons = this.allIcons.filter((icon)=> icon.includes(this.searchString));
  }
}
