import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomeRoutingModule } from './home-routing-module';
import { Home } from './home';

@NgModule({
  declarations: [
    Home
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HomeRoutingModule
  ],
  exports: [
    Home
  ]
})
export class HomeModule { }
