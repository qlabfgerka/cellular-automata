import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TwoDimensionalComponent } from './two-dimensional.component';

const routes: Routes = [{ path: '', component: TwoDimensionalComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TwoDimensionalRoutingModule {}
