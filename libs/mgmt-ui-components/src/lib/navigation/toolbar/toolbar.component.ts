import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxToolbarModule } from 'devextreme-angular';

@Component({
  selector: 'di-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent {
  // Toolbar documentation: https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxToolbar/
  @Input() toolbarItems: any;

}

@NgModule({
  imports: [CommonModule, BrowserModule, DxToolbarModule],
  exports: [ToolbarComponent],
  declarations: [ToolbarComponent],
})
export class ToolbarComponentModule {}
