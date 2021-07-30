import { BadRequestException, Module } from '@nestjs/common';
import { APP_FILTER, APP_PIPE } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { PublishController } from './controllers/publish/publish.controller';
import { PublishService } from './services/publish/publish.service';
import { SubscribeController } from './controllers/subscribe/subscribe.controller';
import { SubscribeService } from './services/subscribe/subscribe.service';
import { SubscriptionService } from './services/subscription/subscription.service';
import { SubscriberNotifierService } from './services/subscriber-notifier/subscriber-notifier.service';
import configuration from '../../config/configuration';
import ValidationPipe from '../../common/pipes/validation.pipe';
import ExceptionsFilter from '../../common/filters/exceptions.filter';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    HttpModule.register({ timeout: 60000, maxRedirects: 5 }),
  ],
  controllers: [PublishController, SubscribeController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: ExceptionsFilter,
    },
    {
      provide: APP_PIPE,
      useFactory: () => {
        return new ValidationPipe({
          exceptionFactory: (errors) => new BadRequestException(errors),
          transform: true,
          validationError: { target: false, value: false },
          whitelist: true,
        });
      },
    },
    PublishService,
    SubscribeService,
    SubscriptionService,
    SubscriberNotifierService,
  ],
})
export class PublisherModule {}
