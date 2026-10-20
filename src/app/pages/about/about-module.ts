import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AboutRoutingModule } from './about-routing-module';
import { About } from './about';

@NgModule({
  declarations: [
    About
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AboutRoutingModule
  ],
  exports: [
    About
  ]
})
export class AboutModule { }
