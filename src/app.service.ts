import { Injectable } from '@nestjs/common';
import { ProducerService } from './kafka/producer.service';

@Injectable()
export class AppService {
  constructor(private readonly kafkaProducer: ProducerService) {}
  async getHello() {
    const hello = 'Hello World!';
    await this.kafkaProducer.produce({
      topic: 'test',
      messages: [
        {
          value: hello,
        },
      ],
    });
    return hello;
  }
}
