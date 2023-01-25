import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Route } from "@angular/router";
import { AppComponent } from "./app.component";
import { ClarityModule } from "@clr/angular";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CocktailsListComponent } from "./cocktails-list/cocktails-list.component";
const routes: Route[] = [
  { path: "list", component: CocktailsListComponent },
  { path: "", pathMatch: "full", redirectTo: "list" },
];

@NgModule({
  declarations: [AppComponent, CocktailsListComponent],
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
