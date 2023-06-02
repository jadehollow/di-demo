import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiIconComponent } from './di-icon/di-icon.component';
import { DiIconGalleryComponent } from './di-icon-gallery/di-icon-gallery.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [DiIconComponent, DiIconGalleryComponent],
  exports: [DiIconComponent, DiIconGalleryComponent],
})
export class MgmtIconLibModule {}
