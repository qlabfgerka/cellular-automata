import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OneDimensionalRoutingModule } from './one-dimensional-routing.module';
import { OneDimensionalComponent } from './one-dimensional.component';


@NgModule({
  declarations: [
    OneDimensionalComponent
  ],
  imports: [
    CommonModule,
    OneDimensionalRoutingModule
  ]
})
export class OneDimensionalModule { }
