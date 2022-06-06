
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AuthenticationGuard } from './core/guards/authentication-guard.service';
import { LoginGuard } from './core/guards/login-guard.service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () => import('./all/home/home.module').then((m) => m.HomeModule),
    canLoad: [LoginGuard],
  },
  {
    path: 'filme',
    loadChildren: () =>
      import('./all/filme/filme.module').then((m) => m.FilmeModule),
    canLoad: [AuthenticationGuard],
  },
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }