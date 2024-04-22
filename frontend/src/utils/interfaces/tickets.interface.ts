export interface TicketProps{
    id: string;
    lastName: string;
    origin: string;
    destination: string;
    date: string;
    typeFlight: string;
    idFlight: number;
    boardingTime: string;
    arrivalTime: string;
    flightPrice: number;
    check: boolean;
}