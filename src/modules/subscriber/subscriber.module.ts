import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SubscriptionTestController } from './controllers/subscription-test.controller';
import { SubscriptionTestService } from './services/subscription-test.service';
import configuration from '../../config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
  ],
  providers: [SubscriptionTestService],
  controllers: [SubscriptionTestController],
})
export class SubscriberModule {}
