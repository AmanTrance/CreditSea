import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateLoanDetailsDto } from 'src/dto/loan-details.dto';
import { ResponseLoanDetailsDto } from 'src/dto/loan-details.response.dto';
import { LoanDetails } from 'src/entities/loan-details.entity';
import { ILoanDetails } from 'src/interfaces/ILoanDetails.interface';

@Injectable()
export class LoanDetailsService {
    constructor(@InjectModel('LoanDetails') private readonly loanDetailsModel: Model<ILoanDetails>) {}

    async createLoanDetails(loanDetailsDto: CreateLoanDetailsDto): Promise<void> {
        try {
            await this.loanDetailsModel.collection.insertOne(loanDetailsDto);
        } catch(e) {
            throw new InternalServerErrorException({ meassage: "Database crashed" });
        }
    }

    async getLoanDetails(): Promise<ResponseLoanDetailsDto[]> {
        try {
            const result: LoanDetails[] = await this.loanDetailsModel.aggregate([
                { $match: {}}
            ]);

            let response: ResponseLoanDetailsDto[] = []; 
            for (let data of result) {
                response.push({
                    fullName: data.fullName,
                    requiredAmount: data.requiredAmount,
                    dateApplied: data.dateApplied,
                    loanStatus: data.loanStatus
                })
            }
            return response;

        } catch(e) {
            throw new InternalServerErrorException({ message: "Database not responding" });
        }
    }
}
