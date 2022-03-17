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
    path: `game-of-life`,
    loadChildren: () =>
      import(
        './components/automatas/two-dimensional/two-dimensional.module'
      ).then((m) => m.TwoDimensionalModule),
  },
  {
    path: `caverns`,
    loadChildren: () =>
      import('./components/automatas/caverns/caverns.module').then(
        (m) => m.CavernsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
