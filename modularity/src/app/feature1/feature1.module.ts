import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Feature1RoutingModule } from './feature1-routing.module';
import { FeatComp1Component } from './feat-comp1/feat-comp1.component';

@NgModule({
  declarations: [FeatComp1Component],
  imports: [
    CommonModule,
    Feature1RoutingModule
  ],  
  exports: [
    FeatComp1Component
  ]
})
export class Feature1Module { }
