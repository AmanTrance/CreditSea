import { TableColumnsType } from "antd"
import { Status } from "./columns"

export interface LoanDetailsAdmin{
    "User Details": string,
    "Customer name": string,
    "Date": string,
    "Action": Status
}

export const adminColumns: TableColumnsType<LoanDetailsAdmin> = [
    {
        title: "User Details",
        dataIndex: "User Details"
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