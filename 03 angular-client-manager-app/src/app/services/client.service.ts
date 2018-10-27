import { Injectable } from '@angular/core';
import { Client } from "../models/Client";
import { Observable } from "rxjs";
import { Http } from "@angular/http";
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  clients: Observable<any[]>;
  client;
  constructor(
    public http: Http
  ) {
  }

  getClients() {
    return this.http.get("http://localhost:3000/api/clients").pipe(map(res => res.json()));
  }

  newClient(client: Client) {
    this.http.post('http://localhost:3000/api/clients/add', {
      firstName: client.firstName,
      lastName: client.lastName,
      email: client.email,
      phone: client.phone,
      balance: client.balance,
    }).subscribe(res => {
      console.log(res);

    }, err => {
      console.log("Error", err);
    });
  }

  getClient(id: string) {
    return this.http.get('http://localhost:3000/api/clients/' + id).pipe(map(res => this.client = res.json()));
  }


  deleteClient(id) {
    return this.http.delete("http://localhost:3000/api/clients/delete/" + id, {});
  }
  updateClient(id, client) {
    console.log(client);
    return this.http.put("http://localhost:3000/api/clients/update/" + id, client).pipe(map(res => res.json()));
  }
}
