import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Subscription } from './subscription.schema';
import { SubscribeEmailDto } from './dto/subscription.dto';

@Injectable()
export class SubscriptionService {
  constructor(
    @InjectRepository(Subscription)
    private subscriptionsRepository: Repository<Subscription>,
  ) {}

  async create(body: SubscribeEmailDto): Promise<Subscription> {
    const subscription = await this.subscriptionsRepository.create(body);
    const savedSubscription =
      await this.subscriptionsRepository.save(subscription);

    return savedSubscription;
  }

  async findAll(): Promise<Subscription[]> {
    const subscriptions = await this.subscriptionsRepository.find();

    return subscriptions;
  }

  async findOne(email: string): Promise<Subscription | null> {
    return this.subscriptionsRepository.findOneBy({ email });
  }

  async remove(email: string): Promise<void> {
    await this.subscriptionsRepository.delete(email);
  }
}
