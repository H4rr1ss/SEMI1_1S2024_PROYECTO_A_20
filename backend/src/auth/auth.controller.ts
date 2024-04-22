import { Controller } from '@nestjs/common';
import { Body, Post } from '@nestjs/common';
import {
  ConflictException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterClientDto, LoginClientDto } from './dto/auth.dto';
import { encryptPassword } from '../utils/encrypt';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  async registerClient(
    @Body()
    data: RegisterClientDto,
  ) {
    try {
      return await this.authService.registerClient(data);
    } catch (error) {
      throw new ConflictException('User already exists');
    }
  }

  @Post('/login')
  async loginClient(
    @Body()
    data: LoginClientDto,
  ) {
    const findedUser = await this.authService.loginClient(data);

    if (!findedUser) {
      throw new NotFoundException('User not found');
    }

    if (findedUser.password === encryptPassword(data.password)) {
      return findedUser;
    } else {
      throw new UnauthorizedException('Invalid username or password');
    }
  }
}
