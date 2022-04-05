import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ejercicio1Component } from './ejercicio1/ejercicio1.component';
import { BienvenidoComponent } from './ejercicio2/bienvenido/bienvenido.component';
import { Ejercicio2Component } from './ejercicio2/ejercicio2.component';
import { ErrorComponent } from './ejercicio2/error/error.component';
import { LoginComponent } from './ejercicio2/login/login.component';

const routes: Routes = [
  {
    path: 'ejercicio1',
    component: Ejercicio1Component
    },
    {
      path: 'ejercicio2',
      component: Ejercicio2Component
    },
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'bienvenido',
      component: BienvenidoComponent
    },
    {
      path: 'error',
      component: ErrorComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
