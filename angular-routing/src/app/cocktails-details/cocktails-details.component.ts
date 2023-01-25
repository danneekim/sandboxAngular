import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { switchMap } from "rxjs/operators";
@Component({
  selector: "app-cocktails-details",
  templateUrl: "./cocktails-details.component.html",
  styleUrls: ["./cocktails-details.component.css"],
})
export class CocktailsDetailsComponent implements OnInit {
  id: string;

  constructor(private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activeRoute.paramMap
      .pipe(switchMap((paramsMap) => (this.id = paramsMap.get("id"))))
      .subscribe();
  }
}
