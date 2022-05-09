import {Body, Controller, Get, HttpStatus, Param, Post, Res} from "@nestjs/common";
import {Ticket} from "../models/ticket.model";
import {TicketsService} from "../services/tickets.service";

@Controller('tickets')
export class TicketsController {

    constructor(private ticketsService: TicketsService) {
    }

    @Post('insert')
    public async insertTicket(@Body() body: Ticket, @Res() res) {
        const errors: string[] = this.ticketsService.validateTicket();
        if (errors.length > 0) {
            res.status(HttpStatus.BAD_REQUEST);
            res.send({errors: errors})
        } else {
            res.send(await this.ticketsService.insertTicket(body));
        }
    }

    @Get('all')
    public async getAllTickets(@Res() res) {
        res.send(await this.ticketsService.getAllTickets());
    }

    @Post('update/:id')
    public async updateTicket(@Param('id') id, @Body() body, @Res() res) {
        res.send(await this.ticketsService.updateTicket(body, id))
    }
}
