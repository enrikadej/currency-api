import { Module } from '@nestjs/common';
import { CurrencyRateController } from './currency-rate.controller';
import { CurrencyRateService } from './currency-rate.service';

@Module({
  controllers: [CurrencyRateController],
  providers: [CurrencyRateService],
})
export class CurrencyRateModule {}
