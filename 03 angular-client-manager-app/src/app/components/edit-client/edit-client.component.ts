import { Component, OnInit } from '@angular/core';
import { ClientService } from "../../services/client.service";
import { Client } from "../../models/Client"
import { FlashMessagesService } from "angular2-flash-messages";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {

  id: string;
  client: Client = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    balance: 0
  }
  disableBalanceOnEdit: boolean = true;
  constructor(
    public clientService: ClientService,
    public router: Router,
    public route: ActivatedRoute,
    public flashMessagesService: FlashMessagesService
  ) {

  }
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    // Getting the client.
    this.clientService.getClient(this.id).subscribe(client => {
      this.client = client.client;
    });
  }

  onSubmit({ value, valid }: { value: Client, valid: boolean }) {
    if (!valid) {
      this.flashMessagesService.show("Please fill the form with valid values.", { cssClass: "alert alert-danger", timeout: 3000 });
      this.router.navigate(['edit-client/' + this.id]);
    } else {
      this.clientService.updateClient(this.id, value).subscribe();
      this.flashMessagesService.show("Client Updated please referesh the page.", { cssClass: "alert alert-success", timeout: 3000 });
      this.router.navigate(["/client/" + this.id]);
    }
  }

}
