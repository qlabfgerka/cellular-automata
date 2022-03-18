import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TwoDimensionalRoutingModule } from './two-dimensional-routing.module';
import { TwoDimensionalComponent } from './two-dimensional.component';
import { TwoDimensionalBoardModule } from 'src/app/components/automatas/two-dimensional/two-dimensional-board/two-dimensional-board.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [TwoDimensionalComponent],
  imports: [
    CommonModule,
    TwoDimensionalRoutingModule,
    TwoDimensionalBoardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSliderModule,
    MatButtonModule,
  ],
})
export class TwoDimensionalModule {}
