import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ticket-info-field',
  templateUrl: './ticket-info-field.component.html',
  styleUrls: ['./ticket-info-field.component.scss']
})
export class TicketInfoFieldComponent implements OnInit {

  @Input('is-editing') isEditing: boolean = false;
  @Input() value: string = '';
  @Input() title: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
