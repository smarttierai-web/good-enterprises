import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { GalleryRoutingModule } from './gallery-routing-module';
import { Gallery } from './gallery';

@NgModule({
  declarations: [
    Gallery
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    GalleryRoutingModule
  ],
  exports: [
    Gallery
  ]
})
export class GalleryModule { }
