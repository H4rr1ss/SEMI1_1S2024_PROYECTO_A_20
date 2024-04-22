import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { S3Service } from '../s3/s3.service';
import { RegisterClientDto, LoginClientDto } from './dto/auth.dto';
import { encryptPassword } from '../utils/encrypt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private s3: S3Service,
  ) {}

  async registerClient(data: RegisterClientDto) {
    const { client } = data;
    const { profilePicture } = data;

    // Crear un nuevo cliente en la base de datos
    const newClient = await this.prisma.client.create({
      data: {
        firstName: client.firstName,
        lastName: client.lastName,
        phoneNumber: client.phoneNumber,
        nationality: client.nationality,
        email: client.email,
        passportNumber: client.passportNumber,
        password: encryptPassword(client.password),
      },
    });

    // Ahora que el usuario ha sido creado, puedes acceder a su ID
    const key = `Fotos_Perfil/${newClient.id}_${profilePicture.name}`;
    // Subir la imagen a S3
    const urlPhoto = await this.s3.uploadImage(key, profilePicture.base64);

    // Actualizar el cliente con la URL de la foto de perfil y retornar el resultado directamente
    return this.prisma.client.update({
      where: { id: newClient.id },
      data: {
        profilePicture: urlPhoto,
      },
    });
  }

  async loginClient(data: LoginClientDto) {
    return this.prisma.client.findUnique({
      where: {
        email: data.email,
      },
    });
  }
}
