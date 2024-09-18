import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoanDetailsModule } from './loan-details/loan-details.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://amanhobo:ceaHVMMdhMFTeIO5@cluster0.nh1f8qx.mongodb.net/', {
      dbName: 'CreditSea'
    }),
    LoanDetailsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
