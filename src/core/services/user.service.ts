import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UserService {
  isLoggedIn$ = new Subject<boolean>();
  username: string | null;
  constructor() {}

  login(username: string) {
    this.username = username;
    localStorage.setItem("username", username);
    localStorage.setItem("isLoggedIn", String(true));
    this.isLoggedIn$.next(true);

    // return this.username;
  }

  isLoggedIn() { // change this to Subject
    return localStorage.getItem("isLoggedIn") === "true";
  }

  getUserName() {
    return localStorage.getItem("username");
  }

  logout() {
    this.username = null;
    localStorage.removeItem("username");
    localStorage.setItem("isLoggedIn", String(false));
    this.isLoggedIn$.next(false);
  }
}
