import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoanDetailsModule } from './loan-details/loan-details.module';
import { MongooseModule } from '@nestjs/mongoose';
import { config } from 'dotenv';

config();

@Module({
  imports: [
    MongooseModule.forRoot(`${process.env.MONGO_URL}`, {
      dbName: 'CreditSea'
    }),
    LoanDetailsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
