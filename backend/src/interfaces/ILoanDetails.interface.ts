import { Document } from "mongoose";

export interface ILoanDetails extends Document {
    readonly fullName: string,
    readonly loanTenure: number,
    readonly reason: string,
    readonly requiredAmount: string,
    readonly employmentStatus: string,
    readonly address1: string,
    readonly address2: string
}