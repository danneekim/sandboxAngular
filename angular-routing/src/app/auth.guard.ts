import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): true | UrlTree {
    return this.authenicateOrRedirect();
  }

  authenicateOrRedirect() {
    if (this.authService.isAuthenicated) {
      return true;
    } else {
      return this.router.parseUrl("/unauthorized");
    }
  }
}
