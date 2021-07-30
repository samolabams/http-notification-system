import { Injectable } from '@nestjs/common';

@Injectable()
export class SubscriptionService {
  private subscriptions = new Map<string, Set<string>>();

  subscribeToTopic(topic: string, url: string) {
    const topicUrls = this.getTopicSubscribers(topic);

    if (topicUrls) {
      this.subscriptions.set(topic, topicUrls.add(url));
    } else {
      this.subscriptions.set(topic, new Set([url]));
    }
  }

  getTopicSubscribers(topic: string): Set<string> {
    return this.subscriptions.get(topic);
  }
}
