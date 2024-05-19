import { Controller, Get } from '@nestjs/common';
import { CurrencyRateService } from './currency-rate.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Currancy rate')
@Controller('/rate')
export class CurrencyRateController {
  constructor(private readonly currencyRateService: CurrencyRateService) {}

  @ApiOperation({ summary: 'Get dolar rate' })
  @ApiResponse({ status: 200, type: Number })
  @Get('/dollar')
  getDollarExchangeRate(): Promise<number> {
    return this.currencyRateService.getDollarExchangeRate();
  }
}
