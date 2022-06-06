import { Router } from '@angular/router';
import { FilmeRegistrationService } from './../../../core/registrations/filme-registration.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Genero } from 'src/app/models/filme';

@Component({
  selector: 'app-filme-registration',
  templateUrl: './filme-registration.component.html',
  styleUrls: ['./filme-registration.component.css']
})
export class FilmeRegistrationComponent implements OnInit {

  filmeForm!: FormGroup;
  constructor(private fb : FormBuilder, private filmeRegService : FilmeRegistrationService, private router: Router) { }
  tipo = Genero;

  ngOnInit(): void {
    this.filmeForm = this.fb.group({
      nome: ['',[Validators.required, Validators.maxLength(255)]],
      descricao: ['',  [Validators.required, Validators.maxLength(255)]],
      valor: [0.00, Validators.required],
      genero: [null, Validators.required],
      urlCapa: ['', [Validators.required, Validators.maxLength(255)]],
      urlVideo: ['', [Validators.required, Validators.maxLength(255)]],
    });

  }


  register(){
    this.filmeRegService.register(this.filmeForm.value).subscribe(
      () => {
        this.router.navigate([""])
      }
    );
  }


  

}
