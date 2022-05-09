export interface Ticket{
   concertId: number;
   concertName: string;
   firstName: string;
   lastName: string;
   email: string;
   phoneNr: string;
   price: number;
   status: "paid" | "pending" | "late";
}
