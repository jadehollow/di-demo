import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MenuComponentModule } from '../../misc/menu/menu.component';
import { Router } from '@angular/router';

@Component({
  selector: 'di-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
})
export class NavMenuComponent {
  menuItems: any;

  constructor(private router: Router) {
    this.menuItems = [
      {
        displayExpr: 'lightMode',
        showFirstSubmenuMode: 'showFirstSubmenuModes',
        orientation: 'horizontal',
        hideSubmenuOnMouseLeave: 'true',
        onItemClick: () => {},
      },
    ];
  }
}

@NgModule({
  imports: [CommonModule, BrowserModule, MenuComponentModule],
  exports: [NavMenuComponent],
  declarations: [NavMenuComponent],
})
export class NavMenuComponentModule {}
