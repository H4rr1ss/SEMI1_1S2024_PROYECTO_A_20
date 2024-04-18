import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { S3Module } from './s3/s3.module';
import { FlightsModule } from './flights/flights.module';

@Module({
  imports: [ConfigModule.forRoot(), AuthModule, S3Module, FlightsModule],
})
export class AppModule {}
