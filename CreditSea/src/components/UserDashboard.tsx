import Search from "../assets/search.png";
import { Table } from "antd";
import { columns } from "../utils/columns";
import Icon from "../assets/Icon.png";
import Form from "./Form";
import { useEffect, useState } from "react";
import Close from "../assets/close.png";
import Navbar from "./Navbar";
import axios from "axios";

type ResponseData = {
    fullName: string,
    loanTenure: number,
    reason?: string,
    requiredAmount: string,
    employmentStatus: string,
    address1: string,
    address2: string,
    _id: string
}

function UserDashboard() {
    const [form, setForm] = useState<boolean>(false);

    useEffect(() => {
        const handleData = async () => {
            const response = await axios.get("http://localhost:3000/loan/many");
            const data: ResponseData[] = response.data as ResponseData[];
            console.log(data);
        }
        handleData();
    }, [])

    const handleForm = () => {
        if (form === false) {
            setForm(true);
        } else {
            setForm(false);
        }
    }

  return (
    <>
    { !form && <Navbar isUser={true}/> }
    { form && <div className="absolute flex justify-center items-center w-full h-14"><img src={Close} className="h-6 w-6 z-20 cursor-pointer rounded-xl" onClick={handleForm}></img></div> }
    <div className="flex flex-col justify-center items-center h-full w-full bg-slate-200">
        { form && <Form/> }
        <div className="grid grid-rows-2 h-2/6 w-3/4">
            <div className="h-full"></div>
            <div className="flex items-center justify-between h-full">
                <div className="grid grid-cols-2 h-full w-1/4">
                        <div className="flex justify-center items-center">
                            <div className="flex justify-center items-center bg-[#6B9908] h-3/4 w-24">
                                <img src={Icon} className="h-2/4 w-2/4"></img>
                            </div>
                        </div>
                    <div className="flex flex-col justify-center items-center font-bold text-[#6B9908] pr-8">
                        DEFICIT
                        <h1 className="text-6xl font-bold text-[#6B9908]">0.0</h1>
                    </div>
                </div>
                <div className="flex items-center justify-end w-1/4 h-full p-2">
                    <button className="bg-green-200 w-36 font-extrabold transition-all duration-300 ease-in h-12 rounded-lg hover:bg-green-400" onClick={handleForm}>Get a Loan</button>
                </div>
            </div>
        </div>
        <div className="flex flex-col justify-center items-center h-2/6 w-3/4">
            <div className="flex justify-evenly items-center h-2/4 w-full">
                <button className="bg-white h-2/5 rounded-lg w-1/5 font-extrabold hover:bg-green-200 transition-all duration-300 ease-in">Borrow Cash</button>
                <button className="bg-white h-2/5 rounded-lg w-1/5 font-extrabold hover:bg-green-200 transition-all duration-300 ease-in">Transact</button>
                <button className="bg-white h-2/5 rounded-lg w-1/5 font-extrabold hover:bg-green-200 transition-all duration-300 ease-in">Deposit Cash</button>
            </div>       
            <div className="flex justify-center items-center h-2/4 w-full">
                <div className="grid grid-cols-[1fr_15fr] h-2/6 w-3/5 bg-white rounded-lg">
                    <div className="flex justify-center items-center bg-green-100 rounded-l-lg"><img className="h-5 w-5 cursor-pointer" src={Search}></img></div>
                    <div className="w-full rounded-r-lg"><input type="search" className="w-full h-full pl-4 pr-2 outline-none font-bold rounded-r-lg" placeholder="Search for loans"/></div>
                </div>
            </div> 
        </div>
        <div className="h-4/6 w-3/4">
            <Table columns={columns} title={() => "Applied Loans"} pagination={{position: ["bottomCenter"]}}/>
        </div>
    </div>
    </>
  )
}

export default UserDashboard