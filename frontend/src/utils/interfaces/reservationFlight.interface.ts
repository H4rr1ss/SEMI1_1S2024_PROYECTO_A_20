interface PropsPayment {
  setIdFlight: (idFlight: number) => void;
  setPrice: (price: number) => void;
  setIndexFlight: (indexFlight: number) => void;
}

export interface Traveler {
  typeTraveler: string;
  quantity: number;
}

export interface ReserveFlight {
  origin: string;
  destination: string;
  date: string;
  typeFlight: string;
  travellers: Traveler[];
  setActiveIndex: (activeIndex: number) => void;
}

export interface FlightProps {
  id: number;
  index: number;
  boardingTime: string;
  arrivalTime: string;
  price: number;
  sets: PropsPayment;
  reserveFlight: ReserveFlight;
}

export interface Payments {
  origin: string;
  destination: string;
  date: string;
  typeFlight: string;
  travellers: Traveler[];
  id: number;
  boardingTime: string;
  arrivalTime: string;
  flightPrice: number;
}

export interface GetFlights {
  origin: string;
  destination: string;
  date: string;
  typeFlight: string;
}

export interface Flights {
  id: number;
  destinationCountry: string;
  destination: string;
  originCountry: string;
  origin: string;
  boardingTime: string;
  arrivalTime: string;
  date: string;
  price: string;
  typeFlight: string;
  preventiveRecommendations: string;
}
