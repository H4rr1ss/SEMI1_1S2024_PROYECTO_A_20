import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Client } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async registerClient(client: Client) {
    console.log(client);
    /*
    const newClient = await this.prisma.client.create({
      data: {
        firstName: client.firstName,
        lastName: client.lastName,
        email: client.email,
        passportNumber: client.passportNumber,
        phoneNumber: client.phoneNumber,
        nationality: client.nationality,
        password: client.password,
      },
    });
    */
  }
}
