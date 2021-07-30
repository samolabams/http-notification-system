import { Injectable } from '@nestjs/common';
import { SubscriptionService } from '../subscription/subscription.service';
import { SubscribeDto } from '../../dto/subscribe.dto';

@Injectable()
export class SubscribeService {
  constructor(private readonly subscriptionService: SubscriptionService) {}

  async execute(topic: string, { url }: SubscribeDto) {
    this.subscriptionService.subscribeToTopic(topic, url);

    return { url, topic };
  }
}
