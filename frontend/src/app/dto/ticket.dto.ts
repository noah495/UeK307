export interface TicketDto {
  firstName: string;
  lastName: string;
  email: string;
  phoneNr: string;
  concertId: number;
  status: 'pending' | 'late' | 'paid';
  timeLeft: number;
}
