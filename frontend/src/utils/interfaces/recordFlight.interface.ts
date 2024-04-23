import { ImageBase64 } from "./image.interface";

export interface RecordFlight {
  flight: Flight;
  destinationDetails: DestinationDetails;
}

export interface Flight {
  destinationCountry: string;
  destination: string;
  originCountry: string;
  origin: string;
  boardingTime: string;
  arrivalTime: string;
  date: string;
  price: number;
  typeFlight: string;
  preventiveRecommendations: string;
}

export interface DestinationDetails {
  description: string;
  places: Place[];
  destinationImage: ImageBase64;
}

export interface Place {
  name: string;
  description: string;
}
