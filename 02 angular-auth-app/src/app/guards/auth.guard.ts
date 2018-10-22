import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { AuthService } from "../service/auth.service";
import { FlashMessagesService } from "angular2-flash-messages";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router,
    private flashMessagesService: FlashMessagesService
  ) {

  }

  canActivate() {
    if (this.auth.loggedIn()) {
      return true;
    } else {
      this.flashMessagesService.show("You are not logged in Please login first", { cssClass: "alert alert-danger", timeout: 3000 });
      this.router.navigate(['login']);
      return false;
    }
  }
}