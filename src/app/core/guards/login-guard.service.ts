import { Injectable } from '@angular/core';
import {
  CanLoad,
  Route,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication.service';


@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanLoad {
  constructor(private authService: AuthenticationService, private router: Router) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.authService.loggedUser().token !== undefined && this.authService.loggedUser().token !== null) {
      this.router.navigate(['filme']);
      return false;
    }

    return true;
  }
}
