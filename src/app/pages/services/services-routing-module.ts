import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Services } from './services';

const routes: Routes = [
  { path: 'services', component: Services }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
