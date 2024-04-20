import { Client } from '@prisma/client';
import { Image } from '../../interfaces/image.interface';

export class EditProfileDto {
  client?: Client;
  profilePicture?: Image;
}
