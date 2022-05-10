export interface Ticket {
    firstName: string;
    lastName: string;
    email: string;
    phoneNr: string;
    concertId: number;
    status: string;
    timeLeft: string;
    purchaseDate?: Date;
}
