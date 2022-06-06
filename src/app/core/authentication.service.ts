import { StorageModel, emptyStorageModel, TipoUsuarioDTOOutput } from './../models/dto/authetication/storage';
import { StorageService } from './storage.service';
import { CredencialDTO } from '../models/dto/authetication/credencial';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';

const KEY = 'storageModel';
const API = environment.apiURL;
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {

  jwtHelper?: JwtHelperService = new JwtHelperService();

  constructor(
    private httpClient: HttpClient,
    private storageService : StorageService
  ) {}

  login(credencial : CredencialDTO): Observable<HttpResponse<any>> {
    return this.httpClient
      .post<string>(
        `${API}/login`,
        credencial,
        { observe: 'response' }
      ).pipe(
        tap(res => {
          let tok = res.headers.get('Authorization').substring(7);
          let storage = emptyStorageModel;
          storage.token = tok;
          this.storageService.setStorageModel(storage);
        })
      );
  }


  succesfulLogin( res: HttpResponse<any>) : Observable<HttpResponse<any>>{
    console.log("Chegou aqui")
    let tok =res.headers.get('Authorization').substring(7);
    const email = this.jwtHelper.decodeToken(tok).sub;

    return this.httpClient.get<StorageModel>(`${API}/usuario/ini/${email}`)
      .pipe(
        map(storage => {
          storage.token = tok;
          this.storageService.setStorageModel(storage);
          console.log(storage);
          return res;
    }));
  }

  logout() {
    this.storageService.setStorageModel(null);
  }


  loggedUser(): StorageModel{
    return JSON.parse(localStorage.getItem(KEY)) ?? '';
  }

  isAdm(): boolean {
    return this.loggedUser().tipo.toString() === 'ADMIN';
  }

  updateCreditos(valorADescontar: number){
    let storage: StorageModel = this.loggedUser();
    storage.creditos = storage.creditos - valorADescontar;
    this.storageService.setStorageModel(storage);
  }

}
