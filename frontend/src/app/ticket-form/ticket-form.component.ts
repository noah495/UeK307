import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Ticket} from "../models/ticket.model";
import {TicketService} from "../serivces/ticket.service";
import {Concert} from "../models/concert.model";
import {ConcertService} from "../serivces/concert.service";
import {MatStepper} from "@angular/material/stepper";

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TicketFormComponent implements OnInit {
  public firstName: string = '';
  public lastName: string = '';
  public choice: number = 0;
  public chosenConcert: Concert = null;
  public phoneNr: string = '';
  public email: string = '';
  public bonus: number = 0
  public concerts: Concert[] = null;
  public errors: string[] = [];

  constructor(private ticketService: TicketService, private concertService: ConcertService) {
    this.concertService.fetchAllConcerts().then(res => {
      this.concerts = res as Concert[];
    })
  }

  public saveTicket(stepper: MatStepper) {
    this.ticketService.createTicket({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phoneNr: this.phoneNr,
      concertId: this.chosenConcert ? this.chosenConcert.id : 0,
      status: 'pending',
      timeLeft: this.calculateTimeToPay()
    }).then(res => {
      if (typeof res === 'boolean') stepper.next();
      else this.errors = res;
    })
  }

  private calculateTimeToPay() {
    switch (this.bonus) {
      case 0:
        return 30;
      case 5:
        return 20;
      case 10:
        return 15;
      case 15:
        return 10;
    }
    return 30;
  }

  ngOnInit(): void {
  }

  assignChosenConcert() {
    this.chosenConcert = this.choice === 0 ? null : this.concerts.find(concert => concert.id === Number(this.choice));
  }
}
