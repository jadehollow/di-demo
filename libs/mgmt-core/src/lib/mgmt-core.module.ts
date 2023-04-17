import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthCoreModule} from './auth-core/auth-core.module';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    AuthCoreModule
  ]
})
export class MgmtCoreModule {
}
