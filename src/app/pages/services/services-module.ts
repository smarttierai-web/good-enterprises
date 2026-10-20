import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ServicesRoutingModule } from './services-routing-module';
import { Services } from './services';

@NgModule({
  declarations: [
    Services
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ServicesRoutingModule
  ],
  exports: [
    Services
  ]
})
export class ServicesModule { }
