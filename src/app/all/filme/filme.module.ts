import { FilmeComponent } from './filme.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { FilmeRoutingModule } from './filme-routing.module';
import { ListFilmesComponent } from './list-filmes/list-filmes.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilmeRegistrationComponent } from './filme-registration/filme-registration.component';
import { MeusFilmesComponent } from './meus-filmes/meus-filmes.component';


@NgModule({
  declarations: [
   FilmeComponent,
   ListFilmesComponent,
   FilmeRegistrationComponent,
   MeusFilmesComponent
  ],
  imports: [CommonModule, FilmeRoutingModule, SharedModule, NgbModule],
})
export class FilmeModule {}
