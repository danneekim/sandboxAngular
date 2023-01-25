import { Injectable } from "@angular/core";
import { CanActivate, UrlTree, Router, CanLoad } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): true | UrlTree {
    return this.authenicateOrRedirect();
  }

  canLoad(): true | UrlTree {
    return this.authenicateOrRedirect();
  }

  private authenicateOrRedirect() {
    if (this.authService.isAuthenicated()) {
      return true;
    } else {
      return this.router.parseUrl("/unauthorized");
    }
  }
}
