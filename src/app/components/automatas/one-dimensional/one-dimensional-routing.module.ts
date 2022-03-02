import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OneDimensionalComponent } from './one-dimensional.component';

const routes: Routes = [{ path: '', component: OneDimensionalComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OneDimensionalRoutingModule {}
