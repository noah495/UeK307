export interface Ticket{
   id: string;
   concertId: number;
   concertName: string;
   firstName: string;
   lastName: string;
   email: string;
   phoneNr: string;
   status: "paid" | "pending";
   timeLeft: number;
   purchaseDate: string;
}
