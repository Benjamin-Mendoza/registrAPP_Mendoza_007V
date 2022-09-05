import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioAluPage } from './inicio-alu.page';

const routes: Routes = [
  {
    path: '',
    component: InicioAluPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioAluPageRoutingModule {}
