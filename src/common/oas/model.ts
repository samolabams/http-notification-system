import { ApiProperty } from '@nestjs/swagger';

export class ErrorMessage {
  @ApiProperty({
    type: String,
    example: 'email',
  })
  field: string;

  @ApiProperty({
    type: String,
    example: 'Email address already taken',
  })
  message: string;
}
