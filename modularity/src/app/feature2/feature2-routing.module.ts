import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeatComp2Component } from './feat-comp2/feat-comp2.component';
import { SpecialFeatureComponent } from './special-feature/special-feature.component';


const routes: Routes = [
  { path: '', component: FeatComp2Component, children: []},
  { path: 'special', component: SpecialFeatureComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Feature2RoutingModule { }