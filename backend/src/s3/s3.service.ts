import { Injectable } from '@nestjs/common';
import {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
  GetObjectCommand,
} from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import axios from 'axios';

@Injectable()
export class S3Service {
  private s3Client: S3Client;

  constructor() {
    // Inicializa el cliente de S3
    this.s3Client = new S3Client({
      region: process.env.AWS_S3_REGION,
      credentials: {
        accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
      },
    });
  }

  async uploadImage(key: string, dataUrl: string) {
    // Extrae el tipo de imagen y el base64 del string
    const matches = dataUrl.match(/^data:(image\/\w+);base64,(.+)$/);
    if (!matches || matches.length !== 3) {
      throw new Error('Invalid input string');
    }

    const mimeType = matches[1];
    const base64Image = matches[2];

    // Convierte la imagen base64 en un buffer1
    const buffer = Buffer.from(base64Image, 'base64');

    const command = new PutObjectCommand({
      Bucket: process.env.AWS_S3_BUCKET_NAME,
      Key: key,
      Body: buffer,
      ContentEncoding: 'base64',
      ContentType: mimeType,
    });

    try {
      await this.s3Client.send(command);
      const url = `https://${process.env.AWS_S3_BUCKET_NAME}.s3.amazonaws.com/${key}`;
      console.log(`Image uploaded successfully: ${url}`);
      return url;
    } catch (error) {
      console.error(`Error al subir la imagen: ${error}`);
    }
  }

  async getImage(key: string): Promise<string> {
    const command = new GetObjectCommand({
      Bucket: process.env.AWS_S3_BUCKET_NAME,
      Key: key,
    });

    const url = await getSignedUrl(this.s3Client, command);

    const response = await axios.get(url, { responseType: 'arraybuffer' });

    // Convertir los datos de la imagen en un Buffer
    const buffer = Buffer.from(response.data, 'binary');

    // Convertir el Buffer en una cadena en base64
    return buffer.toString('base64');
  }
}
