import { AuthenticationService } from './core/authentication.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Alugue Já';
  constructor(private authService : AuthenticationService){}


  loggedUser() : boolean{
    return this.authService.loggedUser().token !== undefined && this.authService.loggedUser().token !== null;
  }
}
