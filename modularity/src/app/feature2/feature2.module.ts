import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatComp2Component } from './feat-comp2/feat-comp2.component';
import { Feature2RoutingModule } from './feature2-routing.module';
import { SpecialFeatureComponent } from './special-feature/special-feature.component';

@NgModule({
  declarations: [FeatComp2Component, SpecialFeatureComponent],
  imports: [
    CommonModule,
    Feature2RoutingModule
  ],
  exports: [
    FeatComp2Component,
    SpecialFeatureComponent
  ]
})
export class Feature2Module { }
