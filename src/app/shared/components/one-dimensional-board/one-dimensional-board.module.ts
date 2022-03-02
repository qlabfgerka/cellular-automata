import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OneDimensionalBoardRoutingModule } from './one-dimensional-board-routing.module';
import { OneDimensionalBoardComponent } from './one-dimensional-board.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [OneDimensionalBoardComponent],
  imports: [CommonModule, OneDimensionalBoardRoutingModule, MatButtonModule],
  exports: [OneDimensionalBoardComponent],
})
export class OneDimensionalBoardModule {}
