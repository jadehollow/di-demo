import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';
import { DxTagBoxModule } from 'devextreme-angular/ui/tag-box';

@Component({
  selector: 'di-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
})
export class TagComponent {
  @Input() size = 'sm'
  @Input() showClose = false;
  @Input() showDot = false;
  @Input() styleMode = 'light';
}

@NgModule({
  imports: [CommonModule, DxTagBoxModule],
  exports: [TagComponent],
  declarations: [TagComponent],
})
export class TagComponentModule {}