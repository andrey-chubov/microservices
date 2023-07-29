import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  @MessagePattern({ cmd: 'greeting' })
  async getGreetingMessage(name: string): Promise<string> {
    return `Hello ${name}`;
  }

  @EventPattern('event')
  async handleCreatedEvent(data: Record<string, unknown>) {
    console.log(data);
  }
}
