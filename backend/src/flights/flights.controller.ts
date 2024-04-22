import { Controller } from '@nestjs/common';
import { Body, Post, Get } from '@nestjs/common';
import {
  ConflictException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { FlightsService } from './flights.service';
import { RecordFlightDto, GetFlightsDto } from './dto/flights.dto';

@Controller('flights')
export class FlightsController {
  constructor(private readonly flightsService: FlightsService) {}

  @Post('/record-flight')
  async recordFlight(
    @Body()
    data: RecordFlightDto,
  ) {
    return await this.flightsService.recordFlight(data);
  }

  @Get('/get-destinations')
  async getDestinations() {
    return await this.flightsService.getAllDestinations();
  }

  @Post('/get-flights')
  async getFlights(
    @Body()
    data: GetFlightsDto,
  ) {
    return await this.flightsService.getFlights(data);
  }
}
