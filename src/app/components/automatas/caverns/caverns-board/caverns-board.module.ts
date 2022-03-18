import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CavernsBoardRoutingModule } from './caverns-board-routing.module';
import { CavernsBoardComponent } from './caverns-board.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [CavernsBoardComponent],
  imports: [CommonModule, CavernsBoardRoutingModule, MatButtonModule],
  exports: [CavernsBoardComponent],
})
export class CavernsBoardModule {}
