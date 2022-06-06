import { UrlDTO } from './../../models/dto/url-dto';
import { UsuarioCompleto } from './../../models/usuario-aluguel-filme';
import { Aluguel } from './../../models/aluguel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class AluguelRegistrationService {

  constructor(private http: HttpClient) { }

  register(idUsuario: number, idFilme : number ,quantidadeHoras: number) : Observable<any> {
    let aluguel : Aluguel = {
      idUsuario: idUsuario,
      idFilme: idFilme,
      quantidadeHoras: quantidadeHoras
    }

    console.log(aluguel)

    return this.http.post(`${API}/aluguel`, aluguel);
  }

  getUsuarioCompleto(id: number): Observable<UsuarioCompleto> {
    return this.http.get<UsuarioCompleto>(`${API}/usuario/${id}`);
  }

  getUrlFilme(id: number): Observable<UrlDTO> {
    return this.http.get<UrlDTO>(`${API}/aluguel/${id}`);
  }


}
