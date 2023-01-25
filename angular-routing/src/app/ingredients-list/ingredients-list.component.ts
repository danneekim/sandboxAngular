import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { CocktailService } from "../cocktail.service";

@Component({
  selector: "app-ingredients-list",
  templateUrl: "./ingredients-list.component.html",
  styleUrls: ["./ingredients-list.component.css"],
})
export class IngredientsListComponent implements OnInit {
  ingredients$: Observable<Array<string>>;

  constructor(private cocktailService: CocktailService) {}

  ngOnInit(): void {
    this.ingredients$ = this.cocktailService.getIngredients();
  }
}
