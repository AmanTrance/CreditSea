import Search from "../assets/search.png";
import { Table } from "antd";
import { columns, LoanDetails, Status } from "../utils/columns";
import Icon from "../assets/Icon.png";
import Form from "./Form";
import { useEffect, useState } from "react";
import Close from "../assets/close.png";
import Navbar from "./Navbar";
import axios from "axios";
import { v4 as uuid } from "uuid";

export type ResponseData = {
    fullName: string,
    requiredAmount: string,
    dateApplied: Date,
    loanStatus: Status
}

function UserDashboard() {
    const [form, setForm] = useState<boolean>(false);
    const [loanData, setLoanData] = useState<LoanDetails[]>([]);

    useEffect(() => {
        const handleData = async () => {
            const response = await axios.get("http://localhost:3000/loan/many");
            const data: { data?: ResponseData[] } = response.data as { data?: ResponseData[] };
            if (data.data !== undefined) {
                let result: LoanDetails[] = [];
                for (let i of data.data) {
                    result.push({
                        "Loan Officer": i.fullName,
                        "Amount": i.requiredAmount,
                        "Date Applied": i.dateApplied.toString(),
                        "Status": i.loanStatus,
                        "key": uuid()
                    });
                }
                setLoanData(result);
            }
        }
        handleData();
    }, []);

    const handleForm = () => {
        if (form === false) {
            setForm(true);
        } else {
            setForm(false);
        }
    }

  return (
    <div className="h-full w-full">
    { !form && <Navbar isUser={true}/> }
    { form && <div className="absolute flex justify-center items-center w-full h-14"><img src={Close} className="h-4 w-4 sm:h-6 sm:w-6  z-20 cursor-pointer rounded-xl" onClick={handleForm}></img></div> }
    <div className="flex flex-col justify-center items-center h-full w-full bg-slate-200">
        { form && <Form/> }
        <div className="grid grid-rows-1 h-1/6 w-3/4">
            <div className="flex items-center justify-between h-full">
                <div className="grid grid-cols-2 h-full md:w-1/4 w-2/4">
                        <div className="flex justify-center items-center">
                            <div className="flex justify-center items-center bg-[#6B9908] md:h-3/4 h-2/4 w-24">
                                <img src={Icon} className="h-6 w-12 md:h-8 md:w-20"></img>
                            </div>
                        </div>
                    <div className="flex flex-col justify-center items-center font-bold text-[#6B9908] lg:pr-6 pl-6">
                        DEFICIT
                        <h1 className="lg:text-6xl text-xl font-bold text-[#6B9908]">0.0</h1>
                    </div>
                </div>
                <div className="flex items-center justify-end md:w-1/4 w-3/6 h-full p-2">
                    <button className="bg-green-200 md:w-36 w-5/6 font-extrabold border shadow-sm transition-all duration-300 ease-in h-12 rounded-lg hover:bg-green-400" onClick={handleForm}>Get a Loan</button>
                </div>
            </div>
        </div>
        <div className="flex flex-col justify-center items-center h-2/6 md:w-3/4 w-full">
            <div className="flex justify-evenly items-center h-2/4 w-full">
                <button className="bg-white h-14 rounded-lg lg:w-1/5 w-32 border shadow-sm font-extrabold hover:bg-green-200 transition-all duration-300 ease-in">Borrow Cash</button>
                <button className="bg-white h-14 rounded-lg lg:w-1/5 w-32 border shadow-sm font-extrabold hover:bg-green-200 transition-all duration-300 ease-in">Transact</button>
                <button className="bg-white h-14 rounded-lg lg:w-1/5 w-32 border shadow-sm font-extrabold hover:bg-green-200 transition-all duration-300 ease-in">Deposit Cash</button>
            </div>       
            <div className="flex justify-center items-center h-2/4 w-full">
                <div className="grid lg:grid-cols-[1fr_15fr] grid-cols-[1.5fr_10fr] md:h-2/6 md:w-3/5 h-2/5 w-4/6 bg-white rounded-lg">
                    <div className="flex justify-center items-center bg-green-100 rounded-l-lg"><img className="h-5 w-5 cursor-pointer" src={Search}></img></div>
                    <div className="w-full rounded-r-lg"><input type="search" className="w-full h-full pl-4 pr-2 outline-none font-bold rounded-r-lg" placeholder="Search for loans"/></div>
                </div>
            </div> 
        </div>
        <div className="h-auto w-full md:w-3/4 overflow-y-scroll no-scrollbar">
            <Table  columns={columns} dataSource={loanData} title={() => "Applied Loans"} pagination={{position: ["bottomCenter"]}}/>
        </div>
    </div>
    </div>
  )
}

export default UserDashboard