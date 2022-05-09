import {Injectable} from "@nestjs/common";
import {DbConnectionService} from "./db-connection.service";
import {Connection} from "mysql2";
import {Concert} from "../models/concert.model";

@Injectable()
export class ConcertsService {
    private connection: Connection;

    constructor(private dbService: DbConnectionService) {
        this.connection = dbService.getConnection();
    }

    public getAllConcerts(): Promise<Concert[]> {
        return new Promise<Concert[]>(resolve => {
            this.connection.query("SELECT * FROM concerts", (err, data) => {
                if (err) resolve(null);
                resolve(data as Concert[]);
            })
        });
    }

    public getConcertById(id: string): Promise<Concert> {
        return new Promise<Concert>(resolve => {
            this.connection.query("SELECT * FROM concerts WHERE id = ?", [id], (err, data) => {
                if (err) resolve(null);
                resolve(data[0] as Concert);
            })
        })
    }
}
