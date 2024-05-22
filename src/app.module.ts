import { Module } from '@nestjs/common';
import { CurrencyRateModule } from './currency-rate/currency-rate.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subscription } from './subscription/subscription.schema';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      port: Number(process.env.POSTGRES_PORT),
      host: process.env.POSTGRES_HOST,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [Subscription],
      autoLoadEntities: true,
    }),
    Subscription,
    CurrencyRateModule,
  ],
})
export class AppModule {}
