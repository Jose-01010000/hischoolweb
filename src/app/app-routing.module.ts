import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { Page404Component } from './components/page404/page404.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

// Rutas
import { routes_home } from './components/home/home.routes.module';
import { routes_login } from './components/login/login.routes.module';
import { AuthGuard } from './guards/auth.guard';
import { routes_dashboard } from './components/dashboard/dashboard.routes.module';

const routes: Routes = [
  { path: 'login', component: LoginComponent, children: routes_login },
  {
    path: 'home',
    component: HomeComponent,
    children: routes_home,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: routes_dashboard,
  },
  // {
  //   path: 'dashboard',
  //   component: DashboardComponent,
  //   data: { expectedRole: 'admin' },
  // },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', component: Page404Component }, // Redirigir a pagina de error 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
