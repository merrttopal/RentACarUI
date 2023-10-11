import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './page/car/car.component';
import { BrandComponent } from './page/brand/brand.component';
import { Not404Component } from './shared/not404/not404.component';

const routes: Routes = [
  {path:"", component:CarComponent},
  {path:"cars/:id", pathMatch:"full",component:CarComponent},
  {path:"aaa", component:BrandComponent},
  {path:"**",component:Not404Component},
  


  

]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
