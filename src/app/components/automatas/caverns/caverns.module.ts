import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CavernsRoutingModule } from './caverns-routing.module';
import { CavernsComponent } from './caverns.component';


@NgModule({
  declarations: [
    CavernsComponent
  ],
  imports: [
    CommonModule,
    CavernsRoutingModule
  ]
})
export class CavernsModule { }
