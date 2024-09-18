import { TableColumnsType } from "antd";
import { Status } from "./columns";
import { v4 as uuid } from "uuid";

export interface LoanDetailsVerifier{
    "User Recent Activity": string,
    "Customer name": string,
    "Date": string,
    "Action": Status
}

export const verifierColumns: TableColumnsType<LoanDetailsVerifier> = [
    {
        title: "User Recent Activity",
        dataIndex: "User Recent Activity",
        key: uuid()
    },
    {
        title: "Customer name",
        dataIndex: "Customer name",
        key: uuid()
    },
    {
        title: "Date",
        dataIndex: "Date",
        key: uuid()
    },
    {
        title: "Status",
        dataIndex: "Status",
        key: uuid()
    }
] 