import { Component, OnInit } from '@angular/core';
import {Ticket} from "../models/ticket.model";
import {TicketService} from "../serivces/ticket.service";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  public tickets: Ticket[] = [];
  constructor(public ticketService: TicketService) {
    this.fetchTickets().then(r => console.log(this.tickets))
  }

  private async fetchTickets(): Promise<void> {
     this.tickets = await this.ticketService.fetchTickets()
  }
  ngOnInit(): void {
  }

}
