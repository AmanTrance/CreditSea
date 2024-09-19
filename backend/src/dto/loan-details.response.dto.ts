import { Optional } from "@nestjs/common";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { LoanStatus } from "src/enums/status.enum";

export class ResponseLoanDetailsDto {
    @IsString()
    @IsNotEmpty()
    fullName: string;

    @IsString()
    @IsNotEmpty()
    requiredAmount: string;

    @IsNotEmpty()
    dateApplied: Date;

    @IsNotEmpty()
    loanStatus: LoanStatus;
}