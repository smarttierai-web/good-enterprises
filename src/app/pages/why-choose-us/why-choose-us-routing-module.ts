import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WhyChooseUs } from './why-choose-us';

const routes: Routes = [
  { path: 'why-choose-us', component: WhyChooseUs }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WhyChooseUsRoutingModule { }
