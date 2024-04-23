import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { S3Service } from '../s3/s3.service';
import { RekognitionService } from 'src/rekognition/rekognition.service';
import { TranslateService } from 'src/translate/translate.service';
import { RecordFlightDto, GetFlightsDto } from './dto/flights.dto';

@Injectable()
export class FlightsService {
  constructor(
    private prisma: PrismaService,
    private s3: S3Service,
    private rekognition: RekognitionService,
    private translate: TranslateService,
  ) {}

  async recordFlight(data: RecordFlightDto) {
    const { flight } = data;
    const { destinationDetails } = data;
    const { destinationImage, places } = destinationDetails;

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
        description: destinationDetails.description,
        flightId: newFlight.id,
      },
    });

    // Crear una nueva imagen en la base de datos
    const key = `Fotos_Destinos/${newDestination.id}_${destinationImage.name}`;
    // Subir la imagen a S3
    const urlPhoto = await this.s3.uploadImage(key, destinationImage.base64);

    // Obtener las etiquetas de la imagen
    const labels = await this.getLabels(urlPhoto);

    // Guardar las etiquetas en la base de datos
    for (const label of labels) {
      await this.prisma.keyWord.create({
        data: {
          keyword: label,
          destinationId: newDestination.id,
        },
      });
    }

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

  getLabels = async (image: string) => {
    // Get the image from S3
    const key = image.split('.com/')[1];
    const base64Image = await this.s3.getImage(key);

    // Analyze the image with Rekognition
    const labels = await this.rekognition.analyzeImage(base64Image);

    // Translate the labels
    const translatedLabels = await this.translate.translateLabels(labels);
    console.log(translatedLabels);

    return translatedLabels;
  };

  async getAllDestinations() {
    const allFlights = await this.prisma.flight.findMany({
      include: {
        destinationDetails: {
          include: {
            places: true,
          },
        },
      },
    });

    const destinationsArray = await Promise.all(
      allFlights.map(async (flight) => {
        const destinationDetail = flight.destinationDetails[0];

        const keywords = await this.prisma.keyWord.findMany({
          where: {
            destinationId: destinationDetail.id,
          },
        });

        const labels = keywords.map((keyword) => keyword.keyword);

        return {
          name: flight.destination,
          country: flight.destinationCountry,
          image: destinationDetail.image,
          description: destinationDetail.description,
          keywords: labels,
          places: destinationDetail.places,
          preventiveRecommendations: flight.preventiveRecommendations,
        };
      }),
    );

    return destinationsArray;
  }

  async getFlights(data: GetFlightsDto) {
    const flights = await this.prisma.flight.findMany({
      where: {
        origin: data.origin,
        destination: data.destination,
        date: data.date,
        typeFlight: data.typeFlight,
      },
    });
    return flights;
  }
}
