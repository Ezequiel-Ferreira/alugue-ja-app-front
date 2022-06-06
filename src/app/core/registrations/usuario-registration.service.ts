import { UsuarioRegistration } from './../../models/dto/registrations/usuario-registration';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class UsuarioRegistrationService {

  constructor(private http: HttpClient) { }

  registrer(usuario: UsuarioRegistration) : Observable<any>{
    return this.http.post(`${API}/usuario`, usuario);
  }

  registrerAdm(usuario: UsuarioRegistration, codigo: string) : Observable<any>{
    return this.http.post(`${API}/usuario/${codigo}`, usuario);
  }
}
