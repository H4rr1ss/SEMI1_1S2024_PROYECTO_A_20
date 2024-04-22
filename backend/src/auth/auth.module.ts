import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { S3Module } from 'src/s3/s3.module';

@Module({
  providers: [AuthService],
  controllers: [AuthController],
  imports: [PrismaModule, S3Module],
})
export class AuthModule {}
