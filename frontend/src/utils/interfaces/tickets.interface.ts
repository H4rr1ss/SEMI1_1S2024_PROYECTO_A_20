export interface TicketProps {
  id: string;
  lastName: string;
  origin: string;
  destination: string;
  date: string;
  typeFlight: string;
  boardingTime: string;
  arrivalTime: string;
  flightPrice: number;
  check: boolean;
  idFlight: number;
}

export interface Ticket {
  id: string;
  origin: string;
  destination: string;
  date: string;
  typeFlight: string;
  travellers: number;
  idFlight: number;
  boardingTime: string;
  arrivalTime: string;
  price: number;

  check: boolean;
}
