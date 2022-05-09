import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Ticket} from "../models/ticket.model";

@Injectable({providedIn: "root"})
export class TicketService {

  baseUrl: string = "http://css-appli.com:3000/"

  constructor(private http: HttpClient) {
  }
  fetchTickets() {
     return new Promise<Ticket[]>(resolve => {
      this.http.get(`${this.baseUrl}tickets/all`).subscribe( response => {
        resolve(response as Ticket[])
      })
    })
  }
}
