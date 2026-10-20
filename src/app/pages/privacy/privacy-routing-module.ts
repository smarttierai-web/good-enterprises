import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Privacy } from './privacy';

const routes: Routes = [
  { path: 'privacy', component: Privacy }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivacyRoutingModule { }
