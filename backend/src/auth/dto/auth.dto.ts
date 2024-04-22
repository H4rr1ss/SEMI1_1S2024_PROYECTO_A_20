import { Client } from '@prisma/client';
import { Image } from '../../interfaces/image.interface';

export class RegisterClientDto {
  client: Client;
  profilePicture: Image;
}

export class LoginClientDto {
  email: string;
  password: string;
}
