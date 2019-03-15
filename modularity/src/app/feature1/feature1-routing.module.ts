import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeatComp1Component } from './feat-comp1/feat-comp1.component';


const routes: Routes = [
  { path: '', component: FeatComp1Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Feature1RoutingModule { }