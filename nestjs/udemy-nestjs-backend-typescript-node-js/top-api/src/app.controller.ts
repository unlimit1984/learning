import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';

@Controller('app')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configService: ConfigService,
  ) {}

  @Get('hello')
  getHello(): string {
  // async getHello(): Promise<string> {
    return (
      this.appService.getHello() + ' TEST=' + this.configService.get('TEST')
    );
  }
}
