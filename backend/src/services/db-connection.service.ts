import {Injectable} from "@nestjs/common";
import {Connection, createConnection} from "mysql2";

const dbCredentials = require('../../dbCredentials.json');

@Injectable()
export class DbConnectionService {
    private connection = createConnection({
        host: dbCredentials.host,
        user: dbCredentials.username,
        password: dbCredentials.password,
        database: dbCredentials.database
    })

    constructor() {
        this.connection.connect((err) => {
            if (err) throw err;
        });
    }

    public getConnection(): Connection {
        return this.connection;
    }
}
