import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioAluPageRoutingModule } from './inicio-alu-routing.module';

import { InicioAluPage } from './inicio-alu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioAluPageRoutingModule
  ],
  declarations: [InicioAluPage]
})
export class InicioAluPageModule {}
