import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @ApiProperty({ example: '123', description: 'user id' })
  @PrimaryGeneratedColumn()
  id: string;

  @ApiProperty({ example: 'user@gmail.com', description: 'email' })
  @Column()
  email: string;

  @ApiProperty({ example: 'true', description: 'is user subscribed' })
  @Column({ default: false })
  isSubscribed: boolean;
}
