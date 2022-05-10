import {Component, Input, OnInit} from '@angular/core';
import {Ticket} from "../models/ticket.model";

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  isEditing: boolean = false;

@Input('ticket') ticket: Ticket | null = null;

  constructor() { }

  ngOnInit(): void {
  }
}
