import {Injectable} from "@nestjs/common";
import {Ticket} from "../models/ticket.model";
import {DbConnectionService} from "./db-connection.service";
import {Connection} from "mysql2";
import {errorMessages, getEmptyFieldMessage} from "../errrors/error-messages";


@Injectable()
export class TicketsService {
    private connection: Connection;

    constructor(private dbService: DbConnectionService) {
        this.connection = dbService.getConnection();
    }

    public insertTicket(ticket: Ticket): Promise<boolean> {
        return new Promise<boolean>(resolve => {
            this.connection.query(
                "INSERT INTO sales (firstname, lastname, email, phone, concertId, status) VALUES (?,?,?,?,?,?)",
                [ticket.firstName, ticket.lastName, ticket.email, ticket.phone, ticket.concertId, ticket.status],
                (err) => {
                    if (err) resolve(false);
                    resolve(true);
                });
        })
    }

    public getAllTickets(): Promise<Ticket[]> {
        return new Promise<Ticket[]>(resolve => {
            this.connection.query("SELECT * FROM sales", (err, data) => {
                if (err) resolve(null);
                resolve(data as Ticket[]);
            });
        })
    }

    public updateTicket(ticket: Ticket, ticketId: number): Promise<boolean> {
        return new Promise<boolean>(resolve => {
            this.connection.query(
                "UPDATE sales SET firstname = ?, lastname = ?, email = ?, phone = ?, concertId = ?, status = ? WHERE id = ?",
                [ticket.firstName, ticket.lastName, ticket.email, ticket.phone, ticket.concertId, ticket.status, ticketId],
                (err) => {
                    if (err) resolve(false);
                    resolve(true);
                });
        })
    }
}
