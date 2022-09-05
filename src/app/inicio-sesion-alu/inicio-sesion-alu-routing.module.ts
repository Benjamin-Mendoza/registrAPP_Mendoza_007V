import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioSesionAluPage } from './inicio-sesion-alu.page';

const routes: Routes = [
  {
    path: '',
    component: InicioSesionAluPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioSesionAluPageRoutingModule {}
