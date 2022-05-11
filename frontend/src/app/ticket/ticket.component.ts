import {Component, Input, OnInit} from '@angular/core';
import {Ticket} from "../models/ticket.model";
import {ConcertService} from "../serivces/concert.service";
import {TicketService} from "../serivces/ticket.service";
import {SnackbarService} from "../serivces/snackbar.service";
import {Concert} from "../models/concert.model";

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  public isEditing: boolean = false;
  public concertName = '';
  public concertId: string = '';
  public concerts: Concert[] = [];

  @Input('ticket') ticket: Ticket | null = null;
  ticketUpdated: Ticket = Object.assign({}, this.ticket);

  constructor(private concertService: ConcertService, private ticketService: TicketService, private snackbarService: SnackbarService) {
    this.concertService.fetchAllConcerts().then(concerts => this.concerts = concerts);
  }

  ngOnInit() {
    if (this.ticket) {
      this.setConcertName(this.ticket.concertId);
      this.setUpdatedTicket(this.ticket);
    }

  }

  public setConcertName(concertId: number) {
    this.concertService.getConcertById(concertId).then(concert => {
      this.concertName = concert.artist
      this.concertId = concert.id.toString();
    });
  }

  public setUpdatedTicket(ticket: Ticket) {
    this.ticketUpdated = Object.assign({},  ticket);
  }

  updateTicket() {
    this.ticketService.updateTicket(this.ticket.id, {...this.ticketUpdated, concertId: Number(this.concertId)}).then(res => {
      if (typeof res === 'boolean') {
        this.isEditing = false;
        this.ticketService.fetchTickets().then(tickets => {
          this.ticket = tickets.find(ticket => ticket.id === this.ticket.id);
          this.setConcertName(this.ticket.concertId);
          if (document.location.href.includes('/overview')) document.location.reload();
        });
      } else {
        this.snackbarService.showErrorSnackbar(res);
      }
    })
  }

  checkIfLate(ticket: Ticket) {
    const today = Date.now();
    const date = new Date(Date.parse(ticket.purchaseDate));
    date.setDate(date.getDate() + ticket.timeLeft);
    return date.getTime() < today;
  }
}
