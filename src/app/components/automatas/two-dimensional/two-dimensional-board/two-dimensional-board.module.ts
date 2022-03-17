import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TwoDimensionalBoardRoutingModule } from './two-dimensional-board-routing.module';
import { TwoDimensionalBoardComponent } from './two-dimensional-board.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [TwoDimensionalBoardComponent],
  imports: [CommonModule, TwoDimensionalBoardRoutingModule, MatButtonModule],
  exports: [TwoDimensionalBoardComponent],
})
export class TwoDimensionalBoardModule {}
