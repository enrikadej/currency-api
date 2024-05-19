import { Injectable } from '@nestjs/common';
import axios from 'axios';
import {
  CURRENCY_DATA_API_TOKEN,
  CURRENCY_DATA_API_URL,
  USD_TO_UAH,
} from './currency-rate.consts';

@Injectable()
export class CurrencyRateService {
  private readonly axiosInstance = axios.create({
    baseURL: CURRENCY_DATA_API_URL,
    headers: {
      apikey: CURRENCY_DATA_API_TOKEN,
    },
  });

  async getDollarExchangeRate(): Promise<number> {
    const { from, to, amount } = USD_TO_UAH;

    try {
      const result = await this.axiosInstance.get(
        `convert?from=${from}&to=${to}&amount=${amount}`,
      );

      return Math.round(result.data.result * 100) / 100;
    } catch (error) {
      console.log(error, 'error');
    }
  }
}
