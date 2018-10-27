import { Component, OnInit } from '@angular/core';
import { Client } from "../../models/Client";
import { Router } from "@angular/router";
import { FlashMessagesService } from "angular2-flash-messages";
import { ClientService } from "../../services/client.service";
@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  client: Client = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    balance: 0
  }

  disableBalanceOnAdd: boolean = false;
  constructor(
    public flashMessagesService: FlashMessagesService,
    public router: Router,
    public clientService: ClientService
  ) { }

  ngOnInit() {
  }

  onSubmit({ value, valid }: { value: Client, valid: boolean }) {
    if (this.disableBalanceOnAdd) {
      value.balance = 0;
    }
    if (!valid) {
      this.flashMessagesService.show("Please fill the form with valid values.", { cssClass: "alert alert-danger", timeout: 3000 });
      this.router.navigate(['add-client']);
    } else {
      this.clientService.newClient(value);
      this.flashMessagesService.show("New Client added Please referesh the page.", { cssClass: "alert alert-success", timeout: 3000 });
      this.router.navigate(["/"]);
    }
  }
}
