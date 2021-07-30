import { ApiProperty, ApiResponseProperty } from '@nestjs/swagger';
import { OASSuccessResponse } from '../../../../common/oas/response';

class SubscribeSuccessResponseData {
  @ApiProperty({ example: 'http://localhost:9000/test1' })
  url: string;

  @ApiProperty({ example: 'topic1' })
  topic: string;
}

export class SubscribeSuccessResponse extends OASSuccessResponse {
  @ApiProperty({
    example: 'Subscription created',
  })
  message: string;

  @ApiResponseProperty({ type: SubscribeSuccessResponseData })
  data: SubscribeSuccessResponseData;
}
