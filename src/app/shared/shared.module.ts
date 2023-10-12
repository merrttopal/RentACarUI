import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Not404Component } from './not404/not404.component';



@NgModule({
  declarations: [
    NavbarComponent,
    Not404Component
  ],
  imports: [
    CommonModule
    
  ],
  exports:[
    
    NavbarComponent,
    Not404Component
  ]
})
export class SharedModule { }
