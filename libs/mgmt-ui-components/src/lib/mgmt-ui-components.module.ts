import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullPageErrorComponent } from './notifications/full-page-error/full-page-error/full-page-error.component';
//
// import { CheckboxComponent } from './form/checkbox/checkbox.component';
// import { ToggleComponent } from './form/toggle/toggle.component';
// import { BadgeComponent } from './misc/badge/badge.component';
// import { AvatarComponent } from './misc/avatar/avatar.component';
// import { TagComponent } from './misc/tag/tag.component';
// import { InputtextComponent } from './form/inputtext/inputtext.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    // CheckboxComponent,
    // ToggleComponent,
    // BadgeComponent,
    // AvatarComponent,
    // TagComponent,
    // InputtextComponent,
    // ButtonComponent,
    FullPageErrorComponent,
  ],
})
export class MgmtUiComponentsModule {}
