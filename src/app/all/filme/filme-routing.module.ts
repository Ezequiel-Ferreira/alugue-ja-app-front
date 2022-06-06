import { MeusFilmesComponent } from './meus-filmes/meus-filmes.component';
import { FilmeRegistrationComponent } from './filme-registration/filme-registration.component';
import { ListFilmesComponent } from './list-filmes/list-filmes.component';
import { FilmeComponent } from './filme.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: FilmeComponent,
    children: [
      {
        path: '',
        component: ListFilmesComponent
      },
      {
        path: 'registration',
        component: FilmeRegistrationComponent
      },
      {
        path: 'meus-filmes',
        component: MeusFilmesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilmeRoutingModule {}
