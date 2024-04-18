import { Module } from '@nestjs/common';
import { FlightsController } from './flights.controller';
import { FlightsService } from './flights.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { S3Module } from 'src/s3/s3.module';

@Module({
  controllers: [FlightsController],
  providers: [FlightsService],
  imports: [PrismaModule, S3Module],
})
export class FlightsModule {}
