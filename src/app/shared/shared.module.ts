import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AluguelComponent } from './aluguel/aluguel.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  exports: [ ReactiveFormsModule, AluguelComponent],
  declarations: [
    AluguelComponent
  ],
})
export class SharedModule {}
