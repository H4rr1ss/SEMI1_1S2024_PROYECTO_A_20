import { Controller } from '@nestjs/common';
import { Body, Post } from '@nestjs/common';
import { BadRequestException, ConflictException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Client } from '@prisma/client';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  async registerClient(
    @Body()
    client: Client,
  ) {
    try {
      return await this.authService.registerClient(client);
    } catch (error) {
      throw new ConflictException('User already exists');
    }
  }
}
