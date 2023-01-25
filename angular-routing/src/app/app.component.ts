import { Component } from "@angular/core";
import { AuthService } from "./auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "cocktails-app-start";
  loggedIn: boolean;

  constructor(private auth: AuthService) {}

  logIn() {
    this.auth.logIn();
    this.loggedIn = true;
  }

  logOut() {
    this.auth.logOut();
    this.loggedIn = false;
  }
}
