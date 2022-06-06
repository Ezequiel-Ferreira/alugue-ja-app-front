
import { HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  constructor(private authService: AuthenticationService) { }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    
    if (this.authService.loggedUser() !== null) {
     
      const token = this.authService.loggedUser().token;
      request = request.clone({
        setHeaders: {
            Authorization: `Bearer ${token}`
        }
    });
    }

    return next.handle(request);
  }
}
