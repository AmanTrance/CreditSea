import { Document } from "mongoose";
import { LoanStatus } from "src/enums/status.enum";

export interface ILoanDetails extends Document {
    readonly fullName: string,
    readonly loanTenure: number,
    readonly reason: string,
    readonly requiredAmount: string,
    readonly employmentStatus: string,
    readonly address1: string,
    readonly address2: string,
    readonly dateApplied: Date,
    readonly loanStatus: LoanStatus
}