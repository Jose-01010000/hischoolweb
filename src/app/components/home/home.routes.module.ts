import { Routes } from '@angular/router';

import { CursosComponent } from '../shared/cursos/cursos.component';
import { AcercaComponent } from './acerca/acerca.component';
import { InicioComponent } from './inicio/inicio.component';

export const routes_home: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'acerca', component: AcercaComponent },
  { path: 'cursos', component: CursosComponent },
  { path: '**', redirectTo: 'inicio', pathMatch: 'full' },
];
