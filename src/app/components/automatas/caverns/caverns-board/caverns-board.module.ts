import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CavernsBoardRoutingModule } from './caverns-board-routing.module';
import { CavernsBoardComponent } from './caverns-board.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CavernsBoardComponent],
  imports: [
    CommonModule,
    CavernsBoardRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
  ],
  exports: [CavernsBoardComponent],
})
export class CavernsBoardModule {}
