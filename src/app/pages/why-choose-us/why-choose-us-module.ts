import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { WhyChooseUsRoutingModule } from './why-choose-us-routing-module';
import { WhyChooseUs } from './why-choose-us';

@NgModule({
  declarations: [
    WhyChooseUs
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    WhyChooseUsRoutingModule
  ],
  exports: [
    WhyChooseUs
  ]
})
export class WhyChooseUsModule { }
