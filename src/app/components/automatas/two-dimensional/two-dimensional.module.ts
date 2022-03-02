import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TwoDimensionalRoutingModule } from './two-dimensional-routing.module';
import { TwoDimensionalComponent } from './two-dimensional.component';


@NgModule({
  declarations: [
    TwoDimensionalComponent
  ],
  imports: [
    CommonModule,
    TwoDimensionalRoutingModule
  ]
})
export class TwoDimensionalModule { }
