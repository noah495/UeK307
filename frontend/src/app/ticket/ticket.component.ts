import {Component, Input, OnInit} from '@angular/core';
import {Ticket} from "../models/ticket.model";
import {ConcertService} from "../serivces/concert.service";
import {TicketService} from "../serivces/ticket.service";
import {SnackbarService} from "../serivces/snackbar.service";

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

  constructor(private concertService: ConcertService, private ticketService: TicketService, private snackbarService: SnackbarService) {
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

  updateTicket() {
    this.ticketService.updateTicket(this.ticket.id, this.ticketUpdated).then(res => {
      if (typeof res === 'boolean') {
        this.isEditing = false;
        document.location.reload();
      } else {
        this.snackbarService.showErrorSnackbar(res);
      }
    })
  }
}
