import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"

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
    address2: string
}

export const LoanDetailsSchema = SchemaFactory.createForClass(LoanDetails);