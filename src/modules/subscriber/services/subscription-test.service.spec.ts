import { Test, TestingModule } from '@nestjs/testing';
import { SubscriptionTestService } from './subscription-test.service';

describe('SubscriptionTestService', () => {
  let service: SubscriptionTestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubscriptionTestService],
    }).compile();

    service = module.get<SubscriptionTestService>(SubscriptionTestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
