import { Optional } from "@nestjs/common";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateLoanDetailsDto {
    @IsString()
    @IsNotEmpty()
    fullName: string;

    @IsNumber()
    @IsNotEmpty()
    loanTenure: number;

    @IsString()
    @Optional()
    reason?: string;

    @IsString()
    @IsNotEmpty()
    requiredAmount: string;

    @IsString()
    @IsNotEmpty()
    employmentStatus: string;

    @IsString()
    @IsNotEmpty()
    address1: string;

    @IsString()
    @IsNotEmpty()
    address2: string;
}