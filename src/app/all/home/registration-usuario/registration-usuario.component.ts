import { Router } from '@angular/router';
import { UsuarioRegistrationService } from './../../../core/registrations/usuario-registration.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-usuario',
  templateUrl: './registration-usuario.component.html',
  styleUrls: ['./registration-usuario.component.css']
})
export class RegistrationUsuarioComponent implements OnInit {
 
  codigoAdm! : string; 

  usuarioForm! : FormGroup;

  constructor(private fb: FormBuilder, private usuarioRegister : UsuarioRegistrationService, private router: Router) { }

  ngOnInit(): void {
    this.usuarioForm = this.fb.group({
      nome: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.email, Validators.required, Validators.maxLength(50)]],
      senha: ['', Validators.required, Validators.maxLength(50),  Validators.minLength(8)],
      creditos: [0.00, Validators.required],
    });
  }

  register() {
    if (
      this.codigoAdm === null ||
      this.codigoAdm === undefined ||
      this.codigoAdm === ''
      ) {
        this.usuarioRegister.registrer(this.usuarioForm.value).subscribe(() => {
          this.router.navigate(["/"])
        });
      } else {
        this.usuarioRegister.registrerAdm(this.usuarioForm.value, this.codigoAdm).subscribe(() => {
          this.router.navigate(["/"])
        });;
      }
  }

}
