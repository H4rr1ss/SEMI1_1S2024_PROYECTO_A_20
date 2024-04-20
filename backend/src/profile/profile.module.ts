import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { S3Module } from 'src/s3/s3.module';

@Module({
  providers: [ProfileService],
  controllers: [ProfileController],
  imports: [PrismaModule, S3Module],
})
export class ProfileModule {}
