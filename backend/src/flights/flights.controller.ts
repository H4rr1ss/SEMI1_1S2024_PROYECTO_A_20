import { Controller } from '@nestjs/common';
import { Body, Post } from '@nestjs/common';
import {
  ConflictException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { FlightsService } from './flights.service';
import { RecordFlightDto } from './dto/flights.dto';

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
}
