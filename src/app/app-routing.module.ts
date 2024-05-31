import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HolaMundoComponent } from './components/hola-mundo/hola-mundo.component';
import { FormularioEjemploComponent } from './components/formulario-ejemplo/formulario-ejemplo.component';

const routes: Routes = [
  { path: '', redirectTo: '/hola-mundo', pathMatch: 'full' },
  { path: 'hola-mundo', component: HolaMundoComponent },
  { path: 'formulario', component: FormularioEjemploComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
