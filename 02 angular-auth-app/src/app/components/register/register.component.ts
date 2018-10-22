import { Component, OnInit } from '@angular/core';
import { ValidateService } from "../../service/validate.service";
import { FlashMessagesService } from "angular2-flash-messages"
import { AuthService } from "../../service/auth.service"
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name: String;
  username: String;
  email: String;
  password: String;

  constructor(
    private validateService: ValidateService,
    private flashMessagesService: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
    const user = {
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password
    }
    if (!this.validateService.validateRegistger(user)) {
      this.flashMessagesService.show("Please fill in all the fields", { cssClass: "alert alert-danger", timeout: 3000 });
      return false;
    }
    if (!this.validateService.validateEmail(user.email)) {
      this.flashMessagesService.show("Please enter a valid email", { cssClass: "alert alert-danger", timeout: 3000 })
      return false;
    }

    // Register User
    this.authService.registerUser(user).subscribe(data => {
      if (data.success) {
        this.flashMessagesService.show('You are registered and can now login', { cssClass: "alert alert-success", timeout: 3000 });
        this.router.navigate(['/login']);
      } else {
        this.flashMessagesService.show("Something went wrong", { cssClass: "alert alert-danger", timeout: 3000 });
        this.router.navigate(['/register']);
      }
    });
  }

}
