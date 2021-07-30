import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { INotifySubscriber } from '../../interfaces/notifier.interface';

@Injectable()
export class SubscriberNotifierService {
  private logger = new Logger(SubscriberNotifierService.name);

  constructor(private readonly httpService: HttpService) {}

  async execute({ topic, data, urls }: INotifySubscriber) {
    const promises = urls.map((url) => this.httpService.post(url, { topic, data }).toPromise());

    const results = await Promise.allSettled(promises);

    this.logNotificationStatus(results);
  }

  private logNotificationStatus(results) {
    const notificationSummary = results.map((result) => {
      return {
        url: result.status === 'fulfilled' ? (result as any).value.config.url : (result as any).reason.config.url,
        status: result.status === 'fulfilled' ? 'Success' : 'Failed',
      };
    });

    this.logger.log({ notificationSummary });
  }
}
