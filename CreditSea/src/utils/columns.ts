import { TableColumnsType } from "antd"

export enum Status{
    PENDING = 0,
    VERIFIED = 1,
    REJECTED = 2,
    APRROVED = 3
}

export interface LoanDetails{
    "Loan Officer": string,
    "Amount": string,
    "Date Applied": string,
    "Status": Status
}

export const columns: TableColumnsType<LoanDetails> = [
    {
        title: "Loan Officer",
        dataIndex: "Loan Officer"
    },
    {
        title: "Amount",
        dataIndex: "Amount"
    },
    {
        title: "Date Applied",
        dataIndex: "Date Applied"
    },
    {
        title: "Status",
        dataIndex: "Status"
    }
] 