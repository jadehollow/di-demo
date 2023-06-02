import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'di-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent {}

@NgModule({
  imports: [CommonModule],
  exports: [TabsComponent],
  declarations: [TabsComponent],
})
export class TabsComponentModule {}