import { CoreModule } from './../../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegistrationUsuarioComponent } from './registration-usuario/registration-usuario.component';
@NgModule({
  declarations: [HomeComponent, LoginComponent, RegistrationUsuarioComponent],
  imports: [CommonModule, HomeRoutingModule, FormsModule, SharedModule, CoreModule],
  exports: [HomeComponent],
})
export class HomeModule {}
