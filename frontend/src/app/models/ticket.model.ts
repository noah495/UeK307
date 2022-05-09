export interface Ticket{
   concertId: number;
   concertName: string;
   firstName: string;
   lastName: string;
   email: string;
   phoneNr: string;
   status: "paid" | "pending" | "late";
}
