import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { SubscriptionTestService } from '../services/subscription-test.service';

@Controller()
export class SubscriptionTestController {
  constructor(private readonly subscriptionTestService: SubscriptionTestService) {}

  @HttpCode(200)
  @Post('test1')
  test1(@Body() data) {
    this.subscriptionTestService.execute(data);
  }

  @HttpCode(200)
  @Post('test2')
  test2(@Body() data) {
    this.subscriptionTestService.execute(data);
  }
}
