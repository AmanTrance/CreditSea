import { Body, Controller, Inject, Post } from '@nestjs/common';
import { LoanDetailsService } from './loan-details.service';
import { CreateLoanDetailsDto } from 'src/dto/loan-details.dto';
import { ApiResponse } from 'src/dto/response.dto';

@Controller()
export class LoanDetailsController {
    constructor(@Inject() private readonly loanService: LoanDetailsService) {
    }

    @Post('loan')
    async loanDetails(@Body() loanDetails: CreateLoanDetailsDto) {
        await this.loanService.createLoanDetails(loanDetails);
        return new ApiResponse({ message: "created"});
    }
}
