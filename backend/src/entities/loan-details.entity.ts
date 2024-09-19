import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { LoanStatus } from "src/enums/status.enum";

@Schema()
export class LoanDetails {
    @Prop()
    fullName: string;

    @Prop()
    loanTenure: number;

    @Prop()
    reason?: string;

    @Prop()
    requiredAmount: string;

    @Prop()
    employmentStatus: string;

    @Prop()
    address1: string;

    @Prop()
    address2: string;

    @Prop()
    dateApplied: Date;

    @Prop()
    loanStatus: LoanStatus;
}

export const LoanDetailsSchema = SchemaFactory.createForClass(LoanDetails);