import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'feat1comp', loadChildren: './feature1/feature1.module#Feature1Module'},
  { path: 'feat2comp', loadChildren: './feature2/feature2.module#Feature2Module'},
  { path: '', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
