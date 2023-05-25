import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiIconComponent } from './di-icon/di-icon.component';
import { DiIconGalleryComponent } from './di-icon-gallery/di-icon-gallery.component';

@NgModule({
  imports: [CommonModule],
  declarations: [DiIconComponent, DiIconGalleryComponent],
})
export class MgmtIconLibModule {}
