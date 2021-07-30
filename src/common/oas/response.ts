import { ApiProperty } from '@nestjs/swagger';
import { IOASErrorResponse, IOASSuccessResponse } from '../interfaces/oas-response.interface';
import { ErrorMessage } from './model';

export class OASSuccessResponse implements IOASSuccessResponse {
  @ApiProperty({
    example: true,
  })
  success: boolean;

  @ApiProperty({
    example: 'Subscription successful',
  })
  message: string;
}

export class OASErrorResponse implements IOASErrorResponse {
  @ApiProperty({
    example: false,
  })
  success: boolean;

  @ApiProperty({
    example: 503,
  })
  statusCode: number;

  @ApiProperty({
    example: 'We are unable to publish your message',
  })
  message: string;
}

export class OASBadRequestErrorResponse extends OASErrorResponse {
  @ApiProperty({
    example: 400,
  })
  statusCode: number;

  @ApiProperty({
    example: 'Invalid Data',
  })
  message: string;

  @ApiProperty({
    type: [ErrorMessage],
  })
  errors: ErrorMessage;
}
