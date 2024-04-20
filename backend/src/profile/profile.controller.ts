import { Controller } from '@nestjs/common';
import { Body, Param, Patch, Post } from '@nestjs/common';
import { Client } from '@prisma/client';
import { ProfileService } from './profile.service';
import { EditProfileDto } from './dto/profile.dto';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Patch('edit/:id')
  async editProfile(
    @Param('id') id: string,
    @Body()
    data: EditProfileDto,
  ) {
    return await this.profileService.editProfile(Number(id), data);
  }
}
