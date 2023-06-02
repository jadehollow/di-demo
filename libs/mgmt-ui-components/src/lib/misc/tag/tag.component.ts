import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, NgModule, Output, ViewEncapsulation } from '@angular/core';
import { MgmtIconLibModule } from '@mgmt-icon-lib'

@Component({
  selector: 'di-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TagComponent {
  @Input() size = 'sm'
  @Input() showClose = false;
  @Input() showDot = false;

  @Output() closeEmitter = new EventEmitter<void>()
}

@NgModule({
  imports: [CommonModule, MgmtIconLibModule],
  exports: [TagComponent],
  declarations: [TagComponent],
})
export class TagComponentModule {}