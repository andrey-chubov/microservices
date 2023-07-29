import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('RMQ_SERVICE') private client: ClientProxy) {}

  async getHello() {
    const message = await this.client.send({ cmd: 'greeting' }, 'User');
    return message;
  }

  async publishEvent() {
    this.client.emit('book-created', {
      bookName: 'The Way Of Kings',
      author: 'Brandon Sanderson',
    });
  }
}
