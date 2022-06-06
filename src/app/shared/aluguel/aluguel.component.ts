
import { Router } from '@angular/router';
import { AluguelRegistrationService } from './../../core/registrations/aluguel-registration.service';
import { AuthenticationService } from './../../core/authentication.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { QuantidadeHoras } from 'src/app/models/dto/authetication/storage';



@Component({
  selector: 'app-aluguel',
  templateUrl: './aluguel.component.html',
  styleUrls: ['./aluguel.component.css']
})
export class AluguelComponent implements OnInit {

  @Input()
  idFilme!: number;
  @Input()
  valorFilme!: number;

  saldo : number = 0;

  quantidadeHorasForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private aluguelService: AluguelRegistrationService,
    private router: Router
      ) { }

  ngOnInit(): void {
    this.quantidadeHorasForm = this.fb.group({
      quantidadeHoras: [0, Validators.required]
    });
    this.saldo = this.authService.loggedUser().creditos;
  }

  register(){
    let qH : QuantidadeHoras = this.quantidadeHorasForm.value ;
    let quantidadeHoras : number = qH.quantidadeHoras;
    this.aluguelService.register(
      this.authService.loggedUser().id,
      this.idFilme,
      quantidadeHoras
      ).subscribe(() => {
        let valorTotal = this.valorFilme * quantidadeHoras;
        this.authService.updateCreditos(valorTotal);
        this.router.navigate(['filme/meus-filmes']);
      })
  } 

}

