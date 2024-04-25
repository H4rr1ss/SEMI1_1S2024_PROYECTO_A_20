import { Controller, Get } from '@nestjs/common';

@Controller('check')
export class CheckController {
  @Get()
  check(): string {
    return 'OK';
  }
}
