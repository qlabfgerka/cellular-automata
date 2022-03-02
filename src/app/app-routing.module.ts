import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: ``,
    loadChildren: () =>
      import(
        './components/automatas/one-dimensional/one-dimensional.module'
      ).then((m) => m.OneDimensionalModule),
  },
  {
    path: `2d`,
    loadChildren: () =>
      import(
        './components/automatas/two-dimensional/two-dimensional.module'
      ).then((m) => m.TwoDimensionalModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
