import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail } from 'class-validator';

export class SubscriptionEmailDto {
  @ApiProperty({
    example: 'user@gmail.com',
    description: 'Електронна адреса, яку потрібно підписати',
  })
  @IsString()
  @IsEmail({}, { message: 'Email address is not correct' })
  email: string;
}
