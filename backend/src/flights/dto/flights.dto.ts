import { Flight, Destination, Place } from '@prisma/client';
import { Image } from '../../interfaces/image.interface';

class DestinationDetail {
  destination: Destination;
  places: Place[];
  destinationImage: Image;
}

export class RecordFlightDto {
  flight: Flight;
  destinationDetail: DestinationDetail;
}

export class GetFlightsDto {
  origin: string;
  destination: string;
  date: string;
  typeFlight: string;
}
