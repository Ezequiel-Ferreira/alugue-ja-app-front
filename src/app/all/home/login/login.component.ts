import { AuthenticationService } from './../../../core/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credencialForm!: FormGroup;

  constructor(private authService : AuthenticationService,  private router: Router, private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.credencialForm = this.formbuilder.group({
      email: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  login() {
    this.authService.login(this.credencialForm.value).subscribe(
      (res) => {
        return this.authService.succesfulLogin(res).subscribe(
          () =>  this.router.navigate(['filme'])
        );
       
      },
      (error) => {
        alert('Usuário ou senha inválido');
        console.log(error);
      }
    );
  }

}
