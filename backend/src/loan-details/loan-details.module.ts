import { Module } from '@nestjs/common';
import { LoanDetailsController } from './loan-details.controller';
import { LoanDetailsService } from './loan-details.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LoanDetailsSchema } from 'src/entities/loan-details.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'LoanDetails', schema: LoanDetailsSchema}])],
  controllers: [LoanDetailsController],
  providers: [LoanDetailsService]
})
export class LoanDetailsModule {}
