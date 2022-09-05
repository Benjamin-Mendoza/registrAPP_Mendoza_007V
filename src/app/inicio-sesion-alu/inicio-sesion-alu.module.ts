import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioSesionAluPageRoutingModule } from './inicio-sesion-alu-routing.module';

import { InicioSesionAluPage } from './inicio-sesion-alu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioSesionAluPageRoutingModule
  ],
  declarations: [InicioSesionAluPage]
})
export class InicioSesionAluPageModule {}
