import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IsValidUrl } from '../../../common/validation/validators/url.validator';

export class SubscribeDto {
  @ApiProperty({
    type: String,
    example: 'http://localhost:9000/test1',
  })
  @IsValidUrl({ message: 'Url is not valid' })
  @IsNotEmpty()
  url: string;
}
