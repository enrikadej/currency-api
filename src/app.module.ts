import { Module } from '@nestjs/common';
import { CurrencyRateModule } from './currency-rate/currency-rate.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/users.schema';
import { UsersModule } from './users/users.module';
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
      entities: [User],
      // should be false for Production
      // synchronize: true,
      autoLoadEntities: true,
    }),
    UsersModule,
    CurrencyRateModule,
  ],
})
export class AppModule {}
