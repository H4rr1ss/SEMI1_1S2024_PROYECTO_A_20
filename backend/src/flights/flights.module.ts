import { Module } from '@nestjs/common';
import { FlightsController } from './flights.controller';
import { FlightsService } from './flights.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { S3Module } from 'src/s3/s3.module';
import { RekognitionModule } from 'src/rekognition/rekognition.module';

@Module({
  controllers: [FlightsController],
  providers: [FlightsService],
  imports: [PrismaModule, S3Module, RekognitionModule],
})
export class FlightsModule {}
