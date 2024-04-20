import { Injectable } from '@nestjs/common';
import {
  TranslateClient,
  TranslateTextCommand,
} from '@aws-sdk/client-translate';

@Injectable()
export class TranslateService {
  private readonly translateClient: TranslateClient;

  constructor() {
    this.translateClient = new TranslateClient({
      region: process.env.AWS_TRANSLATE_REGION,
      credentials: {
        accessKeyId: process.env.AWS_TRANSLATE_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_TRANSLATE_SECRET_ACCESS_KEY,
      },
    });
  }

  async translateLabels(labels: string[]): Promise<string[]> {
    const translatedLabels = await Promise.all(
      labels.map(async (label) => {
        const command = new TranslateTextCommand({
          Text: label,
          SourceLanguageCode: 'en',
          TargetLanguageCode: 'es',
        });

        const response = await this.translateClient.send(command);

        return response.TranslatedText;
      }),
    );
    return translatedLabels;
  }
}
