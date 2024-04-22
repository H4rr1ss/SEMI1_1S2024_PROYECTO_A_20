import { Injectable } from '@nestjs/common';
import {
  RekognitionClient,
  DetectLabelsCommand,
} from '@aws-sdk/client-rekognition';

@Injectable()
export class RekognitionService {
  private readonly rekognitionClient: RekognitionClient;

  constructor() {
    this.rekognitionClient = new RekognitionClient({
      region: process.env.AWS_REKOGNITION_REGION,
      credentials: {
        accessKeyId: process.env.AWS_REKOGNITION_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_REKOGNITION_SECRET_ACCESS_KEY,
      },
    });
  }

  async analyzeImage(image: string): Promise<string[]> {
    // Convertir la imagen base64 en un Buffer
    const buffer = Buffer.from(image, 'base64');

    const command = new DetectLabelsCommand({
      Image: {
        Bytes: buffer,
      },
      MaxLabels: 5,
    });

    const response = await this.rekognitionClient.send(command);

    // Devuelve las etiquetas detectadas
    return response.Labels?.map((label) => label.Name) || [];
  }
}
