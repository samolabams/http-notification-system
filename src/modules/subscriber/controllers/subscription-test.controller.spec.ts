import { Test, TestingModule } from '@nestjs/testing';
import { SubscriptionTestController } from './subscription-test.controller';

describe('SubscriptionTestController', () => {
  let controller: SubscriptionTestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubscriptionTestController],
    }).compile();

    controller = module.get<SubscriptionTestController>(SubscriptionTestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
