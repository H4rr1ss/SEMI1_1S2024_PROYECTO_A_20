import { Controller } from '@nestjs/common';
import { Body, Param, Post, Get, Patch } from '@nestjs/common';
import {
  ConflictException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { FlightsService } from './flights.service';
import { RecordFlightDto, GetFlightsDto, CheckInDto } from './dto/flights.dto';
import { Ticket } from '@prisma/client';

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

  @Post('/book-flight')
  async bookFlight(
    @Body()
    data: Ticket,
  ) {
    return await this.flightsService.bookFlight(data);
  }

  @Patch('/check-in')
  async checkIn(
    @Body()
    data: CheckInDto,
  ) {
    return await this.flightsService.checkIn(data);
  }

  @Get('/get-tickets/:id')
  async getTickets(@Param('id') id: number) {
    return await this.flightsService.getTicketsByClient(Number(id));
  }
}
