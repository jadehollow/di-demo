import {Component, Input, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { DxMenuModule } from 'devextreme-angular';

@Component({
  selector: 'di-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  // Menu documentation: https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxMenu/
  @Input() menuItems: any;
}

@NgModule({
  imports: [BrowserModule, CommonModule, DxMenuModule],
  exports: [MenuComponent],
  declarations: [MenuComponent],
})
export class MenuComponentModule {}
