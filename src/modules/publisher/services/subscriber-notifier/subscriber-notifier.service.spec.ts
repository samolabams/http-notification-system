import { Test, TestingModule } from '@nestjs/testing';
import { SubscriberNotifierService } from './subscriber-notifier.service';

describe('SubscriberNotifierService', () => {
  let service: SubscriberNotifierService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubscriberNotifierService],
    }).compile();

    service = module.get<SubscriberNotifierService>(SubscriberNotifierService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
