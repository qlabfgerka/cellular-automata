import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CavernsComponent } from './caverns.component';

const routes: Routes = [{ path: '', component: CavernsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CavernsRoutingModule {}
