import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/greeting')
  async getHello() {
    return this.appService.getHello();
  }

  @Get('/publish-event')
  async publishEvent() {
    this.appService.publishEvent();
  }
}
