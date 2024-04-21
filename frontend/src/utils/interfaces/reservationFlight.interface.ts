interface PropsPayment {
  setIdFlight: (idFlight: number) => void;
  setPrice: (price: number) => void;
}

export interface Traveler{
  typeTraveler: string;
  quantity: number;
}

export interface ReserveFlight{
  origin: string;
  destination: string;
  date: string;
  typeFlight: string;
  travellers: Traveler[];
  setActiveIndex: (activeIndex: number) => void;
}

export interface FlightProps {
  idFlight: string;
  boardingTime: string;
  arrivalTime: string;
  price: number;
  sets: PropsPayment;
  reserveFlight: ReserveFlight;
}

export interface Payments{
  origin: string;
  destination: string;
  date: string;
  typeFlight: string;
  travellers: Traveler[];
  idFlight: number,
  boardingTime: string,
  arrivalTime: string,
  flightPrice: number,
}