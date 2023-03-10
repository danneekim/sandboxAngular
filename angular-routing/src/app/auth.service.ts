import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private authenicated: boolean = false;

  constructor() {}

  isAuthenicated() {
    return this.authenicated;
  }

  logIn() {
    this.authenicated = true;
  }

  logOut() {
    this.authenicated = false;
  }
}
