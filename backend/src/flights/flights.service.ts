import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { S3Service } from '../s3/s3.service';

import { RecordFlightDto } from './dto/flights.dto';

@Injectable()
export class FlightsService {
  constructor(
    private prisma: PrismaService,
    private s3: S3Service,
  ) {}

  async recordFlight(data: RecordFlightDto) {
    const { flight } = data;
    const { destinationDetail } = data;
    const { destination, destinationImage, places } = destinationDetail;

    // Registrar vuelo en la base de datos
    const newFlight = await this.prisma.flight.create({
      data: {
        destinationCountry: flight.destinationCountry,
        destination: flight.destination,
        originCountry: flight.originCountry,
        origin: flight.origin,
        boardingTime: flight.boardingTime,
        arrivalTime: flight.arrivalTime,
        date: flight.date,
        price: flight.price,
        typeFlight: flight.typeFlight,
        preventiveRecommendations: flight.preventiveRecommendations,
      },
    });

    // Registrar un destino en la base de datos
    const newDestination = await this.prisma.destination.create({
      data: {
        description: destination.description,
        flightId: newFlight.id,
      },
    });

    // Crear una nueva imagen en la base de datos
    const key = `Fotos_Destinos/${newDestination.id}_${destinationImage.name}`;
    // Subir la imagen a S3
    const urlPhoto = await this.s3.uploadImage(key, destinationImage.base64);

    // Actualizar el destino con la URL de la imagen
    await this.prisma.destination.update({
      where: { id: newDestination.id },
      data: {
        image: urlPhoto,
      },
    });

    // Crear places en la base de datos
    for (const place of places) {
      await this.prisma.place.create({
        data: {
          name: place.name,
          description: place.description,
          destinationId: newDestination.id,
        },
      });
    }
    return newFlight;
  }

  async getAllDestinations() {
    const allFlights = await this.prisma.flight.findMany({
      include: {
        destinationDetail: {
          include: {
            places: true,
          },
        },
      },
    });

    const destinationsArray = allFlights.map((flight) => {
      const destinationDetail = flight.destinationDetail[0];

      return {
        name: flight.destination,
        country: flight.destinationCountry,
        image: destinationDetail.image,
        description: destinationDetail.description,
        places: destinationDetail.places,
        preventiveRecommendations: flight.preventiveRecommendations,
      };
    });

    return destinationsArray;
  }
}
