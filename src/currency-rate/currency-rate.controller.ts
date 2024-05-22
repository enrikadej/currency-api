import { Controller, Get } from '@nestjs/common';
import { CurrencyRateService } from './currency-rate.service';
import { ApiHeader, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiHeader({
  name: 'rate',
  description: 'Отримання поточного курсу USD до UAH',
})
@Controller('/rate')
export class CurrencyRateController {
  constructor(private readonly currencyRateService: CurrencyRateService) {}

  @ApiOperation({
    summary: 'Отримати поточний курс USD до UAH',
    description:
      'Запит має повертати поточний курс USD до UAH використовуючи будь-який third party сервіс з публічним АРІ',
    operationId: 'rate',
  })
  @ApiResponse({
    status: 200,
    type: Number,
    description: 'Повертається актуальний курс USD до UAH',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid status value',
  })
  @Get('/rate')
  getDollarExchangeRate(): Promise<number> {
    return this.currencyRateService.getDollarExchangeRate();
  }
}
