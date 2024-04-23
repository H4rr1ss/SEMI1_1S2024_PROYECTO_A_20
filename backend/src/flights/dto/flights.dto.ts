import { Flight, Destination, Place } from '@prisma/client';
import { Image } from '../../interfaces/image.interface';

export class RecordFlightDto {
  flight: Flight;
  destinationDetails: DestinationDetails;
}

class DestinationDetails {
  description: string;
  places: Place[];
  destinationImage: Image;
}

export class GetFlightsDto {
  origin: string;
  destination: string;
  date: string;
  typeFlight: string;
}
