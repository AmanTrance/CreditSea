import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { LoanDetailsService } from './loan-details.service';
import { CreateLoanDetailsDto } from 'src/dto/loan-details.dto';
import { ApiResponse } from 'src/dto/response.dto';

@Controller('loan')
export class LoanDetailsController {
    constructor(@Inject() private readonly loanService: LoanDetailsService) {
    }

    @Post('create')
    async createLoanDetails(@Body() loanDetails: CreateLoanDetailsDto) {
        await this.loanService.createLoanDetails(loanDetails);
        return new ApiResponse({ message: "created"});
    }

    @Get('many')
    async getLoanDetails() {
        const data = await this.loanService.getLoanDetails();
        return new ApiResponse(data);
    }
}
