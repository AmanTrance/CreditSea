import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateLoanDetailsDto } from 'src/dto/loan-details.dto';
import { ILoanDetails } from 'src/interfaces/ILoanDetails.interface';

@Injectable()
export class LoanDetailsService {
    constructor(@InjectModel('LoanDetails') private readonly loanDetailsModel: Model<ILoanDetails>) {}

    async createLoanDetails(loanDetailsDto: CreateLoanDetailsDto): Promise<void> {
        try{
            await this.loanDetailsModel.collection.insertOne(loanDetailsDto);
        } catch(e) {
            throw new InternalServerErrorException({ meassage: "Database crashed" });
        }
    }
}
