import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Ticket} from "../models/ticket.model";
import {TicketDto} from "../dto/ticket.dto";

@Injectable({providedIn: "root"})
export class TicketService {
  private baseUrl: string = "http://css-appli20.com:3000"

  constructor(private http: HttpClient) {
  }

  fetchTickets() {
     return new Promise<Ticket[]>(resolve => {
      this.http.get(`${this.baseUrl}/tickets/all`).subscribe( response => {
        resolve(response as Ticket[])
      })
    })
  }

  createTicket(ticket: TicketDto) {
    return new Promise<boolean | string[]>(resolve => {
      this.http.post(`${this.baseUrl}/tickets/insert`, ticket).subscribe((response) => {
        resolve(response as boolean);
      }, error => {
        resolve(error.error.errors);
      })
    })
  }
}
