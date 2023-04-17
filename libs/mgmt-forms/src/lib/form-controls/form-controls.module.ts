import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiInputComponent } from './text-box/di-input/di-input.component';
import { TextBoxComponent } from './text-box/text-box.component';

@NgModule({
  imports: [CommonModule],
  declarations: [DiInputComponent, TextBoxComponent],
})
export class FormControlsModule {}
