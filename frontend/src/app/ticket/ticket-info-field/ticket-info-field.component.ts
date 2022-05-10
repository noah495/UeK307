import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-ticket-info-field',
  templateUrl: './ticket-info-field.component.html',
  styleUrls: ['./ticket-info-field.component.scss']
})
export class TicketInfoFieldComponent {

  @Input('is-editing') isEditing: boolean = false;
  @Input() value: string = '';
  @Input() title: string = '';
  @Input('required') isRequired: boolean = false;

  @Output('value') valueEmitter: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  public emitValueChange(event: any) {
    this.valueEmitter.emit((event.target as HTMLInputElement).value)
  }

}
