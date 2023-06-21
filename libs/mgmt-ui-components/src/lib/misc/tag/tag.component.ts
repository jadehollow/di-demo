import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, NgModule, Output } from '@angular/core';
import { MgmtIconLibModule } from '@mgmt-icon-lib'

@Component({
  selector: 'di-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
})
export class TagComponent {
  @Input() size = 'sm'
  @Input() showClose = false;
  @Input() showDot = false;
  @Input() ariaLabelledBy = '';
  @Input() ariaLabel = '';

  @Output() closeEmitter = new EventEmitter<void>()
}

@NgModule({
  imports: [CommonModule, MgmtIconLibModule],
  exports: [TagComponent],
  declarations: [TagComponent],
})
export class TagComponentModule {}