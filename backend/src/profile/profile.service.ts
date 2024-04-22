import { Injectable } from '@nestjs/common';
import { Client } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { S3Service } from '../s3/s3.service';
import { EditProfileDto } from './dto/profile.dto';

@Injectable()
export class ProfileService {
  constructor(
    private prisma: PrismaService,
    private s3: S3Service,
  ) {}

  editProfile = async (id: number, data: EditProfileDto) => {
    const { client, profilePicture } = data;

    const updatedClient = await this.prisma.client.update({
      where: { id },
      data: {
        ...client,
      },
    });

    // Falta actualizar la imagen

    return updatedClient;
  };
}
