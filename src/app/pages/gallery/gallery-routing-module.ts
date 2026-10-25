import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Gallery } from './gallery';

const routes: Routes = [
  { path: 'gallery', component: Gallery }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleryRoutingModule { }
