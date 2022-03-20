import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CavernsRoutingModule } from './caverns-routing.module';
import { CavernsComponent } from './caverns.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { CavernsBoardModule } from './caverns-board/caverns-board.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [CavernsComponent],
  imports: [
    CommonModule,
    CavernsRoutingModule,
    CavernsBoardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSliderModule,
    MatButtonModule,
  ],
})
export class CavernsModule {}
