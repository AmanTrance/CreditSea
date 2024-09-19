import { TableColumnsType } from "antd";
import { Status } from "./columns";
import { v4 as uuid } from "uuid";

export interface LoanDetailsAdmin{
    "User Details": string,
    "Customer name": string,
    "Date": string,
    "Action": Status,
    "key": string
}

export const adminColumns: TableColumnsType<LoanDetailsAdmin> = [
    {
        title: "User Details",
        dataIndex: "User Details",
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
        title: "Action",
        dataIndex: "Action",
        key: uuid()
    }
] 