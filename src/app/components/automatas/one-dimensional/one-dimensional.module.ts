import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OneDimensionalRoutingModule } from './one-dimensional-routing.module';
import { OneDimensionalComponent } from './one-dimensional.component';
import { OneDimensionalBoardModule } from 'src/app/components/automatas/one-dimensional/one-dimensional-board/one-dimensional-board.module';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [OneDimensionalComponent],
  imports: [
    CommonModule,
    OneDimensionalRoutingModule,
    OneDimensionalBoardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSliderModule,
  ],
})
export class OneDimensionalModule {}
