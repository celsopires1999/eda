import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { Global, Module } from '@nestjs/common';

@Global()
@Module({
  imports: [
    RabbitMQModule.forRoot(RabbitMQModule, {
      uri: 'amqp://admin:admin@rabbitmq:5672',
      connectionInitOptions: { wait: false },
    }),
    RabbitmqModule,
  ],
  exports: [RabbitMQModule],
})
export class RabbitmqModule {}
