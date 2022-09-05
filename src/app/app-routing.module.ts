import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  
  {
    path: 'action-sheet',
    loadChildren: () => import('./pages/action-sheet/action-sheet.module').then( m => m.ActionSheetPageModule)
  },
  

  
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'inicio-sesion',
    loadChildren: () => import('./inicio-sesion/inicio-sesion.module').then( m => m.InicioSesionPageModule)
  },
  {
    path: 'inicio-sesion-alu',
    loadChildren: () => import('./inicio-sesion-alu/inicio-sesion-alu.module').then( m => m.InicioSesionAluPageModule)
  },

  {
    path: 'como-funciona',
    loadChildren: () => import('./pageAlu/como-funciona/como-funciona.module').then( m => m.ComoFuncionaPageModule)
  },
  {
    path: 'inicio-alu',
    loadChildren: () => import('./pageAlu/inicio-alu/inicio-alu.module').then( m => m.InicioAluPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
