import { TableColumnsType } from "antd"
import { Status } from "./columns"

export interface LoanDetailsVerifier{
    "User Recent Activity": string,
    "Customer name": string,
    "Date": string,
    "Action": Status
}

export const verifierColumns: TableColumnsType<LoanDetailsVerifier> = [
    {
        title: "User Recent Activity",
        dataIndex: "User Recent Activity"
    },
    {
        title: "Customer name",
        dataIndex: "Customer name"
    },
    {
        title: "Date",
        dataIndex: "Date"
    },
    {
        title: "Status",
        dataIndex: "Status"
    }
] 