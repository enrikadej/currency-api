import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('subscriptions')
export class Subscription {
  @ApiProperty({ example: '123', description: 'subscription id' })
  @PrimaryGeneratedColumn()
  id: string;

  @ApiProperty({ example: 'user@gmail.com', description: 'email' })
  @Column()
  email: string;
}
