import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TermsRoutingModule } from './terms-routing-module';
import { Terms } from './terms';

@NgModule({
  declarations: [
    Terms
  ],
  imports: [
    CommonModule,
    RouterModule,
    TermsRoutingModule
  ],
  exports: [
    Terms
  ]
})
export class TermsModule { }
