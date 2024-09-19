import { TableColumnsType } from "antd";
import { v4 as uuid } from "uuid";

export enum Status{
    PENDING = "Pending",
    VERIFIED = "Verified",
    REJECTED = "Rejected",
    APRROVED = "Approved"
}

export interface LoanDetails{
    "Loan Officer": string,
    "Amount": string,
    "Date Applied": string,
    "Status": Status,
    "key" : string
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