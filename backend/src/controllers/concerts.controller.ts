import {Controller, Get, Res} from "@nestjs/common";
import {ConcertsService} from "../services/concerts.service";

@Controller('concerts')
export class ConcertsController {

    constructor(private concertsService: ConcertsService) {
    }

    @Get('all')
    public async getAllConcerts(@Res() res) {
        res.send(await this.concertsService.getAllConcerts());
    }
}
