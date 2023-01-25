import { Injectable } from "@angular/core";
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from "@angular/router";
import { Observable, of } from "rxjs";
import { Cocktail } from "./cocktail.model";
import { CocktailService } from "./cocktail.service";

@Injectable({
  providedIn: "root",
})
export class CocktailDetailsResolver implements Resolve<Observable<Cocktail>> {
  constructor(private cocktailService: CocktailService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Cocktail> {
    const id = route.paramMap.get("id");
    return this.cocktailService.getById(id);
  }
}
