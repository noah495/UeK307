import {Controller, Get, Param, Res} from "@nestjs/common";
import {ConcertsService} from "../services/concerts.service";

@Controller('concerts')
export class ConcertsController {

    constructor(private concertsService: ConcertsService) {
    }

    @Get('all')
    public async getAllConcerts(@Res() res) {
        res.send(await this.concertsService.getAllConcerts());
    }

    @Get(':id')
    public async getConcertById(@Param('id') id, @Res() res) {
        res.send(await this.concertsService.getConcertById(id));
    }
}
