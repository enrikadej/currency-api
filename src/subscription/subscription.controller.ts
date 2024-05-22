import { Body, Controller, Post, Get } from '@nestjs/common';
import { SubscriptionService } from './subscription.service';
import { Subscription } from './subscription.schema';
import { SubscribeEmailDto } from './dto/subscription.dto';
import { ApiHeader, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { FormDataRequest } from 'nestjs-form-data';

@ApiHeader({
  name: 'subscription',
  description: 'Робота з підпискою',
})
@Controller('/subscribe')
export class SubscribeController {
  constructor(private readonly subscriptionService: SubscriptionService) {}

  @ApiOperation({ summary: 'Get all subscriptions' })
  @ApiResponse({ status: 200, type: [Subscription] })
  @Get()
  getAllSubscriptions() {
    return this.subscriptionService.findAll();
  }

  @ApiOperation({
    summary: 'Підписати емейл на отримання поточного курсу',
    description:
      'Запит має перевірити, чи немає данної електронної адреси в поточній базі даних і, в разі її відсутності, записувати її.',
    operationId: 'subscribe',
  })
  @ApiResponse({
    status: 200,
    type: Number,
    description: 'E-mail додано',
  })
  @ApiResponse({
    status: 409,
    description: 'Повертати, якщо e-mail вже є в базі даних',
  })
  @Post('/subscription')
  @FormDataRequest()
  createSubcription(@Body() body: SubscribeEmailDto) {
    return this.subscriptionService.create(body);
  }
}
