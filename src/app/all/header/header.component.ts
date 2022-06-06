import { Router } from '@angular/router';
import { AuthenticationService } from './../../core/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }


  logout(){
    this.authService.logout();
    this.router.navigate(["home"]);
  }

  isAdm() : boolean {
    return this.authService.isAdm();
  }
}
