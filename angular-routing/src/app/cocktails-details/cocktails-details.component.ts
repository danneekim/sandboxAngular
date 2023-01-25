import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { switchMap } from "rxjs/operators";
import { Cocktail } from "../cocktail.model";
import { CocktailService } from "../cocktail.service";
@Component({
  selector: "app-cocktails-details",
  templateUrl: "./cocktails-details.component.html",
  styleUrls: ["./cocktails-details.component.css"],
})
export class CocktailsDetailsComponent implements OnInit {
  // id: string;
  cocktail$: Observable<Cocktail>;

  constructor(
    private activeRoute: ActivatedRoute,
    private cocktailService: CocktailService
  ) {}

  ngOnInit(): void {
    // this.activeRoute.paramMap
    //   .pipe(switchMap((paramsMap) => (this.id = paramsMap.get("id"))))
    //   .subscribe();

    this.cocktail$ = this.activeRoute.paramMap.pipe(
      switchMap((paramsMap) => {
        const id = paramsMap.get("id");
        return this.cocktailService.getById(id);
      })
    );
  }
}
