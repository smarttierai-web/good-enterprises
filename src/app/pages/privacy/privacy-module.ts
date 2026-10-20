import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PrivacyRoutingModule } from './privacy-routing-module';
import { Privacy } from './privacy';

@NgModule({
  declarations: [
    Privacy
  ],
  imports: [
    CommonModule,
    RouterModule,
    PrivacyRoutingModule
  ],
  exports: [
    Privacy
  ]
})
export class PrivacyModule { }
