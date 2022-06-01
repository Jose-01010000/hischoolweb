import { Routes } from '@angular/router';
import { PremiosComponent } from './premios/premios.component';
import { CursousuarioComponent } from './cursousuario/cursousuario.component';

export const routes_dashboard: Routes = [
  { path: 'premios', component: PremiosComponent },
  { path: 'curso-usuario', component: CursousuarioComponent },
  //   { path: 'acerca', component: AcercaComponent },
  //   { path: 'cursos', component: CursoComponent },
  { path: '**', redirectTo: 'premios', pathMatch: 'full' },
];
