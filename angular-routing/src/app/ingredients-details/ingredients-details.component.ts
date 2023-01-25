import { Component, OnInit } from "@angular/core";
import { CocktailService, Ingredient } from "../cocktail.service";
import { ActivatedRoute } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { Observable } from "rxjs";

@Component({
  selector: "app-ingredients-details",
  templateUrl: "./ingredients-details.component.html",
  styleUrls: ["./ingredients-details.component.css"],
})
export class IngredientsDetailsComponent implements OnInit {
  ingredient$: Observable<Ingredient>;

  constructor(
    private cocktailService: CocktailService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.ingredient$ = this.activatedRoute.paramMap.pipe(
      switchMap((paramsMap) => {
        const name = paramsMap.get("name");
        return this.cocktailService.getIngredientsByName(name);
      })
    );

    // this.cocktailService.getIngredientsByName("Gin").subscribe((data) => {
    //   console.log(data);
    // });
  }
}
