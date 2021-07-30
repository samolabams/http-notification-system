import { Body, Controller, Param, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { SubscribeService } from '../../services/subscribe/subscribe.service';
import { SubscribeDto } from '../../dto/subscribe.dto';
import { SubscribeSuccessResponse } from '../../oas/subscribe/subscribe-success.response';
import { SuccessResponse } from '../../../../common/utils/response.util';

@ApiTags('Subscribe')
@Controller('subscribe')
export class SubscribeController {
  constructor(private readonly subscribeService: SubscribeService) {}

  @ApiOperation({ summary: 'Subscribe to topic' })
  @ApiCreatedResponse({
    description: 'Subscription created',
    type: SubscribeSuccessResponse,
  })
  @Post(':topic')
  async subscribe(@Param('topic') topic: string, @Body() data: SubscribeDto) {
    const response = await this.subscribeService.execute(topic, data);

    return SuccessResponse('Subscription created', response);
  }
}
