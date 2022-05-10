import {Component, Input, OnInit} from '@angular/core';
import {Ticket} from "../models/ticket.model";
import {ConcertService} from "../serivces/concert.service";

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  public isEditing: boolean = false;
  public concertName = '';

  @Input('ticket') ticket: Ticket | null = null;
  ticketUpdated: Ticket = Object.assign({}, this.ticket);

  constructor(private concertService: ConcertService) {
  }

  ngOnInit() {
    if (this.ticket) {
      this.setConcertName(this.ticket.concertId);
      this.ticketUpdated = Object.assign({},  this.ticket);
    }

  }

  public setConcertName(concertId: number) {
    this.concertService.getConcertById(concertId).then(concert => this.concertName = concert.artist);
  }

  saveUpdatedTicket() {
    console.log(this.ticketUpdated);
  }

  updateNewStatus(event: Event) {
    console.log((event.target as HTMLSelectElement));
    this.ticketUpdated.status = ((event.target as HTMLSelectElement).value as 'pending' | 'late' | 'paid');
  }
}
