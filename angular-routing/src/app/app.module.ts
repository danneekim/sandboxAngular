import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Route } from "@angular/router";
import { AppComponent } from "./app.component";
import { ClarityModule } from "@clr/angular";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CocktailsListComponent } from "./cocktails-list/cocktails-list.component";
import { CocktailsDetailsComponent } from "./cocktails-details/cocktails-details.component";
import { NotFoundPageComponent } from "./not-found-page/not-found-page.component";
const routes: Route[] = [
  { path: "list", component: CocktailsListComponent },
  { path: "cocktail-details/:id", component: CocktailsDetailsComponent },
  { path: "", pathMatch: "full", redirectTo: "list" },
  { path: "**", component: NotFoundPageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CocktailsListComponent,
    CocktailsDetailsComponent,
    NotFoundPageComponent,
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
