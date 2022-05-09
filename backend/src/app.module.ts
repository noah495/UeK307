import { Module } from '@nestjs/common';
import {TicketsController} from "./controllers/tickets.controller";
import {TicketsService} from "./services/tickets.service";
import {ConcertsService} from "./services/concerts.service";
import {ConcertsController} from "./controllers/concerts.controller";
import {DbConnectionService} from "./services/db-connection.service";

@Module({
  imports: [
  ],
  controllers: [TicketsController, ConcertsController],
  providers: [TicketsService, ConcertsService, DbConnectionService],
})
export class AppModule {}
