import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ContactRoutingModule } from './contact-routing-module';
import { Contact } from './contact';

@NgModule({
  declarations: [
    Contact
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ContactRoutingModule
  ],
  exports: [
    Contact
  ]
})
export class ContactModule { }
