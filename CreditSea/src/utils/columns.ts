import { TableColumnsType } from "antd";
import { v4 as uuid } from "uuid";

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
        dataIndex: "Loan Officer",
        key: uuid()
    },
    {
        title: "Amount",
        dataIndex: "Amount",
        key: uuid()
    },
    {
        title: "Date Applied",
        dataIndex: "Date Applied",
        key: uuid()
    },
    {
        title: "Status",
        dataIndex: "Status",
        key: uuid()
    }
] 