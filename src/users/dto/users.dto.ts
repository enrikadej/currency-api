import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsBoolean, IsEmail } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'user@gmail.com', description: 'email' })
  @IsString()
  @IsEmail({}, { message: 'Email address is not correct' })
  email: string;

  @ApiProperty({ example: 'true', description: 'is user subscribed' })
  @IsBoolean()
  isSubscribed: boolean;
}
