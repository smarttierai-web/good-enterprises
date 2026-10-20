import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { WorkforceRoutingModule } from './workforce-routing-module';
import { Workforce } from './workforce';

@NgModule({
  declarations: [
    Workforce
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    WorkforceRoutingModule
  ],
  exports: [
    Workforce
  ]
})
export class WorkforceModule { }
