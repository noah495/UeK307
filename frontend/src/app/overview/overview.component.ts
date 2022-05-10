import { Component, OnInit } from '@angular/core';
import {Ticket} from "../models/ticket.model";
import {TicketService} from "../serivces/ticket.service";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {
  public tickets: Ticket[] = [];
  constructor(public ticketService: TicketService) {
    this.fetchTickets();
  }

  private async fetchTickets() {
     this.tickets = await this.ticketService.fetchTickets()
  }
}
