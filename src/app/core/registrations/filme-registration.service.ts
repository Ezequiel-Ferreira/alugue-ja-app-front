import { Genero } from 'src/app/models/filme';
import { Filme, FilmeDTOInput } from './../../models/filme';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class FilmeRegistrationService {

  constructor(private http: HttpClient) { }


  getFilmes() : Observable<Filme []> {
    return this.http.get<Filme []>(`${API}/filme`);
  }

  register(filme: FilmeDTOInput) : Observable<any> {
    return this.http.post(`${API}/filme`, filme);
  }



}
