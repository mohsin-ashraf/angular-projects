import { Component, OnInit } from '@angular/core';
import { ClientService } from "../../services/client.service";
import { Client } from "../../models/Client"
import { FlashMessagesService } from "angular2-flash-messages";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {

  id: string;//Which is email right now
  client: Client;
  hasBalance: boolean = false;
  showBalanceUpdateInput: boolean = false;
  constructor(
    public clientService: ClientService,
    public router: Router,
    public route: ActivatedRoute,
    public flashMessagesService: FlashMessagesService
  ) {

  }

  ngOnInit() {
    // Get id
    this.id = this.route.snapshot.params['id'];
    this.clientService.getClient(this.id).subscribe(client => {
      client = client.client;
      if (client.balance > 0) {
        this.hasBalance = true;
      }
      this.client = client;

    });
  }
  onDeleteClick(id) {
    this.clientService.deleteClient(id).subscribe(res => {
      this.flashMessagesService.show("Client deleted successfully.", { cssClass: "alert alert-success", timeout: 3000 });
      this.router.navigate(["/"]);
    });
  }

  updateBalance(id) {
    console.log("Checking the client balance : ", this.client.balance);
    this.clientService.updateClient(id, this.client).subscribe(result => {
      console.log(result);
    });
  }

}
