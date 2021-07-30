import { Injectable, Logger } from '@nestjs/common';
import ObjectLiteral from '../../../common/interfaces/object-literal.interface';

@Injectable()
export class SubscriptionTestService {
  private logger = new Logger(SubscriptionTestService.name);

  async execute(data: ObjectLiteral) {
    this.logger.log(data);
  }
}
