import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Ticket} from "../models/ticket.model";
import {TicketService} from "../serivces/ticket.service";
import {Concert} from "../models/concert.model";
import {ConcertService} from "../serivces/concert.service";
import {MatStepper} from "@angular/material/stepper";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TicketFormComponent {
  public firstName: string = '';
  public lastName: string = '';
  public choice: string = '1';
  public chosenConcert: Concert = null;
  public phoneNr: string = '';
  public email: string = '';
  public bonus: string = '0'
  public concerts: Concert[] = null;
  public ticket: Ticket = null;

  constructor(private ticketService: TicketService, private concertService: ConcertService, private snackBar: MatSnackBar) {
    this.concertService.fetchAllConcerts().then(res => {
      this.concerts = res;
      this.assignChosenConcert();
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
      if (typeof res === 'boolean') {
        this.ticketService.fetchTickets().then(tickets => {
          this.ticket = tickets.find(ticket => this.firstName === ticket.firstName && this.lastName === ticket.lastName && this.email === ticket.email);
          stepper.next();
        })
      } else {
        this.showErrorSnackbar(res);
      };
      console.log(res);
    })
  }

  private calculateTimeToPay() {
    switch (Number(this.bonus)) {
      case 5:
        return 20;
      case 10:
        return 15;
      case 15:
        return 10;
      default:
        return 30;
    }
  }

  public assignChosenConcert() {
    this.chosenConcert = Number(this.choice) === 0 ? null : this.concerts.find(concert => concert.id === Number(this.choice));
  }

  private showErrorSnackbar(errors: string[]) {
    let errorString: string = '';
    errors.forEach(err => errorString += err + '\n')
    this.snackBar.open(errorString, '' ,{
      duration: 2000,
      panelClass: ['error-snackbar']
    });
  }
}
