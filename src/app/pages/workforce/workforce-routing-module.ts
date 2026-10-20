import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Workforce } from './workforce';

const routes: Routes = [
  { path: 'workforce', component: Workforce }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkforceRoutingModule { }
