import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddItemRoutingModule } from './add-item-routing.module';
import { AddItemComponent } from './add-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [AddItemComponent],
  imports: [
    CommonModule,
    AddItemRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
  ],
})
export class AddItemModule {}
