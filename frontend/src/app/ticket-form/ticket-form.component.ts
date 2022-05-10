import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Ticket} from "../models/ticket.model";
import {last} from "rxjs/operators";

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TicketFormComponent implements OnInit {

  firstName: string = '';
  lastName: string = '';
  concertName: string = '';
  phoneNr?: string = '';
  email: string = '';
  bonus: number = 0

  public ticketDraft: Ticket[] = [{
    firstName: this.firstName,
    lastName: this.lastName,
    concertName: this.concertName,
    concertId: null,
    phoneNr: this.phoneNr,
    email: this.email,
    status: 'pending'
    }];

  formatLabel(value: number) {
    return value + "%";
  }

  constructor() { }

  ngOnInit(): void {
  }
}
