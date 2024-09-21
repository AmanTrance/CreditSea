import Dashboard from "../assets/dashboard.png";
import Borrowers from "../assets/borrowers.png";
import Loans from "../assets/loans.png";
import Repayments from "../assets/repayments.png";
import Parameters from "../assets/parameters.png";
import Accounting from "../assets/accounting.png";
import Reports from "../assets/reports.png";
import Collateral from "../assets/collateral.png";
import Access from "../assets/access.png";
import Savings from "../assets/savings.png";
import Expenses from "../assets/expenses.png";
import Esign from "../assets/esign.png";
import Investor from "../assets/investor.png";
import Calender from "../assets/calender.png";
import Settings from "../assets/settings.png";
import Signout from "../assets/signout.png";
import Profile from "../assets/profile.png";
import LoansDash from "../assets/loansdash.png";
import BorrowerDash from "../assets/borrowdash.png";
import CashDash from "../assets/disburseddash.png";
import SavingsDash from "../assets/savingsdash.png";
import RepaidDash from "../assets/repaiddash.png";
import CashReceivedDash from "../assets/groupdash.png";
import { Table } from "antd";
import { LoanDetailsVerifier, verifierColumns } from "../utils/verifiercolumns";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import { ResponseData } from "./UserDashboard";
import { v4 as uuid } from "uuid";
import axios from "axios";
import { useAppSelector } from "../utils/hooks";


function VerifierDashboard() {
    const [loanData, setLoanData] = useState<LoanDetailsVerifier[]>([]);
    const state = useAppSelector((state) => state.menu.state);

    useEffect(() => {
        const handleData = async () => {
            const response = await axios.get("http://localhost:3000/loan/many");
            const data: { data?: ResponseData[] } = response.data as { data?: ResponseData[] };
            if (data.data !== undefined) {
                let result: LoanDetailsVerifier[] = [];
                for (let i of data.data) {
                    result.push({
                        "User Recent Activity": "just a check data",
                        "Customer name": i.fullName,
                        "Date": i.dateApplied.toString(),
                        "Action": i.loanStatus,
                        "key": uuid()
                    });
                }
                setLoanData(result);
            }
        }
        handleData();
    }, []);    

  return (
    <div className="h-full w-full relative">
        <Navbar isVerifier={true}/>
    <div className="grid grid-cols-1 lg:grid-cols-[2fr_8fr] h-full w-full">
        <div className={`h-full ${state ? "absolute w-52 lg: block": "hidden w-full lg:block"} lg:block menu z-10 overflow-y-scroll lg:overflow-y-visible sm:no-scrollbar`}>
        <div className="grid grid-rows-[1fr_9fr] sm:h-auto">
            <div className="flex items-center bg-gray-800 text-[#ADCF1A] font-bold text-md 2xl:text-2xl">
                <img src={Profile} className="pl-4 pr-4"></img>John Okoh
            </div>
            <div className="flex flex-col h-full w-full bg-[#0A512F]">
                <button className="flex items-center w-full text-white text-sm 2xl:text-xl font-bold h-14 pl-3 bg-[#0A512F] border-black cursor-pointer hover:h-16 hover:bg-green-800 transition-all duration-300 ease-in">
                    <img src={Dashboard} className="pr-4"></img>Dashboard
                </button>
                <button className="flex items-center w-full text-white text-sm 2xl:text-xl font-bold h-14 pl-3 border-t-2 bg-[#0A512F] border-black cursor-pointer hover:h-16 hover:bg-green-800 transition-all duration-300 ease-in">
                    <img src={Borrowers} className="pr-4"></img>Borrowers
                </button>
                <button className="flex items-center w-full text-white text-sm 2xl:text-xl font-bold h-14 pl-3 border-t-2 bg-[#0A512F] border-black cursor-pointer hover:h-16 hover:bg-green-800 transition-all duration-300 ease-in">
                    <img src={Loans} className="pr-4"></img>Loans
                </button>
                <button className="flex items-center w-full text-white text-sm 2xl:text-xl font-bold h-14 pl-3 border-t-2 bg-[#0A512F] border-black cursor-pointer hover:h-16 hover:bg-green-800 transition-all duration-300 ease-in">
                    <img src={Repayments} className="pr-4"></img>Repayments
                </button>
                <button className="flex items-center w-full text-white text-sm 2xl:text-xl font-bold h-14 pl-3 border-t-2 bg-[#0A512F] border-black cursor-pointer hover:h-16 hover:bg-green-800 transition-all duration-300 ease-in">
                    <img src={Parameters} className="pr-4"></img>Loan Parameters
                </button>
                <button className="flex items-center w-full text-white text-sm 2xl:text-xl font-bold h-14 pl-3 border-t-2 bg-[#0A512F] border-black cursor-pointer hover:h-16 hover:bg-green-800 transition-all duration-300 ease-in">
                    <img src={Accounting} className="pr-4"></img>Accounting
                </button>
                <button className="flex items-center w-full text-white text-sm 2xl:text-xl font-bold h-14 pl-3 border-t-2 bg-[#0A512F] border-black cursor-pointer hover:h-16 hover:bg-green-800 transition-all duration-300 ease-in">
                    <img src={Reports} className="pr-4"></img>Reports
                </button>
                <button className="flex items-center w-full text-white text-sm 2xl:text-xl font-bold h-14 pl-3 border-t-2 bg-[#0A512F] border-black cursor-pointer hover:h-16 hover:bg-green-800 transition-all duration-300 ease-in">
                    <img src={Collateral} className="pr-4"></img>Collateral
                </button>
                <button className="flex items-center w-full text-white text-sm 2xl:text-xl font-bold h-14 pl-3 border-t-2 bg-[#0A512F] border-black cursor-pointer hover:h-16 hover:bg-green-800 transition-all duration-300 ease-in">
                    <img src={Access} className="pr-4"></img>Access Configuration
                </button>
                <button className="flex items-center w-full text-white text-sm 2xl:text-xl font-bold h-14 pl-3 border-t-2 bg-[#0A512F] border-black cursor-pointer hover:h-16 hover:bg-green-800 transition-all duration-300 ease-in">
                    <img src={Savings} className="pr-4"></img>Savings
                </button>
                <button className="flex items-center w-full text-white text-sm 2xl:text-xl font-bold h-14 pl-3 border-t-2 bg-[#0A512F] border-black cursor-pointer hover:h-16 hover:bg-green-800 transition-all duration-300 ease-in">
                    <img src={Expenses} className="pr-4"></img>Expenses
                </button>
                <button className="flex items-center w-full text-white text-sm 2xl:text-xl font-bold h-14 pl-3 border-t-2 bg-[#0A512F] border-black cursor-pointer hover:h-16 hover:bg-green-800 transition-all duration-300 ease-in">
                    <img src={Esign} className="pr-4"></img>E-Signature
                </button>
                <button className="flex items-center w-full text-white text-sm 2xl:text-xl font-bold h-14 pl-3 border-t-2 bg-[#0A512F] border-black cursor-pointer hover:h-16 hover:bg-green-800 transition-all duration-300 ease-in">
                    <img src={Investor} className="pr-4"></img>Investor Accounts
                </button>
                <button className="flex items-center w-full text-white text-sm 2xl:text-xl font-bold h-14 pl-3 border-t-2 bg-[#0A512F] border-black cursor-pointer hover:h-16 hover:bg-green-800 transition-all duration-300 ease-in">
                    <img src={Calender} className="pr-4"></img>Calender
                </button>
                <button className="flex items-center w-full text-white text-sm 2xl:text-xl font-bold h-14 pl-3 border-t-2 bg-[#0A512F] border-black cursor-pointer hover:h-16 hover:bg-green-800 transition-all duration-300 ease-in">
                    <img src={Settings} className="pr-4"></img>Settings
                </button>
                <button className="flex items-center w-full text-white text-sm 2xl:text-xl font-bold h-14 pl-3 border-t-2 border-b-2 bg-[#0A512F] border-black cursor-pointer hover:h-16 hover:bg-green-800 transition-all duration-300 ease-in">
                    <img src={Signout} className="pr-4"></img>Sign Out
                </button>
            </div>
        </div>
        </div>
        <div className="grid grid-rows-[3.5fr_6.5fr]">
            <div className="grid grid-rows-[1.5fr_8.5fr]">
                <div className="flex items-center pl-4 font-bold text-md xl:text-2xl text-[#0A512F]">Loans</div>
                <div className="grid grid-rows-2 grid-cols-3 gap-4 p-4">
                    <div className="grid grid-cols-1 sm:grid-cols-[4fr_6fr] xl:grid-cols-[2.5fr_7.5fr] rounded-lg sm:rounded-none shadow-md">
                        <div className="hidden sm:flex justify-center items-center bg-[#0A512F]">
                            <img className="h-10 w-10" src={LoansDash}></img>
                        </div>
                        <div className="bg-white sm:w-full rounded-lg sm:rounded-none">
                            <p className="w-full h-2/5 pl-1 sm:pl-4 pt-2 font-bold text-sm xl:text-2xl">50</p>
                            <p className="w-full h-2/5 pl-1 sm:pl-4 font-semibold text-sm xl:text-2xl">LOANS</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-[4fr_6fr] xl:grid-cols-[2.5fr_7.5fr] rounded-lg sm:rounded-none shadow-md">
                        <div className="hidden sm:flex justify-center items-center bg-[#0A512F]">
                            <img className="h-10 w-10" src={BorrowerDash}></img>
                        </div>
                        <div className="bg-white sm:w-full rounded-lg sm:rounded-none">
                            <p className="w-full h-2/5 pl-1 sm:pl-4 pt-2 font-bold text-sm xl:text-2xl">100</p>
                            <p className="w-full h-2/5 pl-1 sm:pl-4 font-semibold text-sm xl:text-2xl">BORROWERS</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-[4fr_6fr] xl:grid-cols-[2.5fr_7.5fr] rounded-lg sm:rounded-none shadow-md">
                        <div className="hidden sm:flex justify-center items-center bg-[#0A512F]">
                            <img className="h-10 w-10" src={CashDash}></img>
                        </div>
                        <div className="bg-white sm:w-full rounded-lg sm:rounded-none">
                            <p className="w-full h-2/5 pl-1 sm:pl-4 pt-2 font-bold text-sm xl:text-2xl">550,000</p>
                            <p className="w-full h-2/5 pl-1 sm:pl-4 font-semibold text-sm xl:text-2xl">CASH DISBURSED</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-[4fr_6fr] xl:grid-cols-[2.5fr_7.5fr] rounded-lg sm:rounded-none shadow-md">
                        <div className="hidden sm:flex justify-center items-center bg-[#0A512F]">
                            <img className="h-10 w-10" src={SavingsDash}></img>
                        </div>
                        <div className="bg-white sm:w-full rounded-lg sm:rounded-none">
                            <p className="w-full h-2/5 pl-1 sm:pl-4 pt-2 font-bold text-sm xl:text-2xl">450,000</p>
                            <p className="w-full h-2/5 pl-1 sm:pl-4 font-semibold text-sm xl:text-2xl">SAVINGS</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-[4fr_6fr] xl:grid-cols-[2.5fr_7.5fr] rounded-lg sm:rounded-none shadow-md">
                        <div className="hidden sm:flex justify-center items-center bg-[#0A512F]">
                            <img className="h-10 w-10" src={RepaidDash}></img>
                        </div>
                        <div className="bg-white sm:w-full rounded-lg sm:rounded-none">
                            <p className="w-full h-2/5 pl-1 sm:pl-4 pt-2 font-bold text-sm xl:text-2xl">30</p>
                            <p className="w-full h-2/5 pl-1 sm:pl-4 font-semibold text-sm xl:text-2xl">REPAID LOANS</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-[4fr_6fr] xl:grid-cols-[2.5fr_7.5fr] rounded-lg sm:rounded-none shadow-md">
                        <div className="hidden sm:flex justify-center items-center bg-[#0A512F]">
                            <img className="h-10 w-10" src={CashReceivedDash}></img>
                        </div>
                        <div className="bg-white sm:w-full rounded-lg sm:rounded-none">
                            <p className="w-full h-2/5 pl-1 sm:pl-4 pt-2 font-bold text-sm xl:text-2xl">1,000,000</p>
                            <p className="w-full h-2/5 pl-1 sm:pl-4 font-semibold text-sm xl:text-2xl">CASH RECEIVED</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="h-5/6 w-full md:w-5/6">
                    <Table columns={verifierColumns} dataSource={loanData} title={() => "Applied Loans"} pagination={{position: ["bottomCenter"]}}/>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default VerifierDashboard