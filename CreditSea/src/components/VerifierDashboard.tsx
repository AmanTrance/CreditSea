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
import { verifierColumns } from "../utils/verifiercolumns";
import Navbar from "./Navbar";


function VerifierDashboard() {
  return (
    <div className="h-full w-full">
        <Navbar isVerifier={true}/>
    <div className="grid grid-cols-[2fr_8fr] h-full w-full">
        <div className="grid grid-rows-[1fr_9fr]">
            <div className="flex items-center bg-gray-800 text-[#ADCF1A] font-bold text-2xl">
                <img src={Profile} className=" pl-4 pr-4"></img>John Okoh
            </div>
            <div className="flex flex-col h-full w-full bg-[#0A512F]">
                <div className="flex items-center w-full text-white text-xl font-bold h-14 pl-3 bg-[#0A512F] border-black cursor-pointer hover:h-16 hover:bg-green-800 transition-all duration-300 ease-in">
                    <img src={Dashboard} className="pr-4"></img>Dashboard
                </div>
                <div className="flex items-center w-full text-white text-xl font-bold h-14 pl-3 border-t-2 bg-[#0A512F] border-black cursor-pointer hover:h-16 hover:bg-green-800 transition-all duration-300 ease-in">
                    <img src={Borrowers} className="pr-4"></img>Borrowers
                </div>
                <div className="flex items-center w-full text-white text-xl font-bold h-14 pl-3 border-t-2 bg-[#0A512F] border-black cursor-pointer hover:h-16 hover:bg-green-800 transition-all duration-300 ease-in">
                    <img src={Loans} className="pr-4"></img>Loans
                </div>
                <div className="flex items-center w-full text-white text-xl font-bold h-14 pl-3 border-t-2 bg-[#0A512F] border-black cursor-pointer hover:h-16 hover:bg-green-800 transition-all duration-300 ease-in">
                    <img src={Repayments} className="pr-4"></img>Repayments
                </div>
                <div className="flex items-center w-full text-white text-xl font-bold h-14 pl-3 border-t-2 bg-[#0A512F] border-black cursor-pointer hover:h-16 hover:bg-green-800 transition-all duration-300 ease-in">
                    <img src={Parameters} className="pr-4"></img>Loan Parameters
                </div>
                <div className="flex items-center w-full text-white text-xl font-bold h-14 pl-3 border-t-2 bg-[#0A512F] border-black cursor-pointer hover:h-16 hover:bg-green-800 transition-all duration-300 ease-in">
                    <img src={Accounting} className="pr-4"></img>Accounting
                </div>
                <div className="flex items-center w-full text-white text-xl font-bold h-14 pl-3 border-t-2 bg-[#0A512F] border-black cursor-pointer hover:h-16 hover:bg-green-800 transition-all duration-300 ease-in">
                    <img src={Reports} className="pr-4"></img>Reports
                </div>
                <div className="flex items-center w-full text-white text-xl font-bold h-14 pl-3 border-t-2 bg-[#0A512F] border-black cursor-pointer hover:h-16 hover:bg-green-800 transition-all duration-300 ease-in">
                    <img src={Collateral} className="pr-4"></img>Collateral
                </div>
                <div className="flex items-center w-full text-white text-xl font-bold h-14 pl-3 border-t-2 bg-[#0A512F] border-black cursor-pointer hover:h-16 hover:bg-green-800 transition-all duration-300 ease-in">
                    <img src={Access} className="pr-4"></img>Access Configuration
                </div>
                <div className="flex items-center w-full text-white text-xl font-bold h-14 pl-3 border-t-2 bg-[#0A512F] border-black cursor-pointer hover:h-16 hover:bg-green-800 transition-all duration-300 ease-in">
                    <img src={Savings} className="pr-4"></img>Savings
                </div>
                <div className="flex items-center w-full text-white text-xl font-bold h-14 pl-3 border-t-2 bg-[#0A512F] border-black cursor-pointer hover:h-16 hover:bg-green-800 transition-all duration-300 ease-in">
                    <img src={Expenses} className="pr-4"></img>Expenses
                </div>
                <div className="flex items-center w-full text-white text-xl font-bold h-14 pl-3 border-t-2 bg-[#0A512F] border-black cursor-pointer hover:h-16 hover:bg-green-800 transition-all duration-300 ease-in">
                    <img src={Esign} className="pr-4"></img>E-Signature
                </div>
                <div className="flex items-center w-full text-white text-xl font-bold h-14 pl-3 border-t-2 bg-[#0A512F] border-black cursor-pointer hover:h-16 hover:bg-green-800 transition-all duration-300 ease-in">
                    <img src={Investor} className="pr-4"></img>Investor Accounts
                </div>
                <div className="flex items-center w-full text-white text-xl font-bold h-14 pl-3 border-t-2 bg-[#0A512F] border-black cursor-pointer hover:h-16 hover:bg-green-800 transition-all duration-300 ease-in">
                    <img src={Calender} className="pr-4"></img>Calender
                </div>
                <div className="flex items-center w-full text-white text-xl font-bold h-14 pl-3 border-t-2 bg-[#0A512F] border-black cursor-pointer hover:h-16 hover:bg-green-800 transition-all duration-300 ease-in">
                    <img src={Settings} className="pr-4"></img>Settings
                </div>
                <div className="flex items-center w-full text-white text-xl font-bold h-14 pl-3 border-t-2 border-b-2 bg-[#0A512F] border-black cursor-pointer hover:h-16 hover:bg-green-800 transition-all duration-300 ease-in">
                    <img src={Signout} className="pr-4"></img>Sign Out
                </div>
            </div>
        </div>
        <div className="grid grid-rows-[3.5fr_6.5fr]">
            <div className="grid grid-rows-[1.5fr_8.5fr]">
                <div className="flex items-center pl-4 font-bold text-3xl text-[#0A512F]">Loans</div>
                <div className="grid grid-rows-2 grid-cols-3 gap-4 p-4">
                    <div className="grid grid-cols-[2.5fr_7.5fr] bg-slate-500 shadow-md">
                        <div className="flex justify-center items-center bg-[#0A512F]">
                            <img src={LoansDash}></img>
                        </div>
                        <div className="bg-white">
                            <p className="w-full h-2/4 pl-4 pt-4 font-bold text-3xl">50</p>
                            <p className="w-full h-2/4 pl-4 pt-4 font-semibold text-3xl">LOANS</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-[2.5fr_7.5fr] bg-slate-500 shadow-md">
                        <div className="flex justify-center items-center bg-[#0A512F]">
                            <img src={BorrowerDash}></img>
                        </div>
                        <div className="bg-white">
                            <p className="w-full h-2/4 pl-4 pt-4 font-bold text-3xl">100</p>
                            <p className="w-full h-2/4 pl-4 pt-4 font-semibold text-3xl">BORROWERS</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-[2.5fr_7.5fr] bg-slate-500 shadow-md">
                        <div className="flex justify-center items-center bg-[#0A512F]">
                            <img src={CashDash}></img>
                        </div>
                        <div className="bg-white">
                            <p className="w-full h-2/4 pl-4 pt-4 font-bold text-3xl">550,000</p>
                            <p className="w-full h-2/4 pl-4 pt-4 font-semibold text-3xl">CASH DISBURSED</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-[2.5fr_7.5fr] bg-slate-500 shadow-md">
                        <div className="flex justify-center items-center bg-[#0A512F]">
                            <img src={SavingsDash}></img>
                        </div>
                        <div className="bg-white">
                            <p className="w-full h-2/4 pl-4 pt-4 font-bold text-3xl">450,000</p>
                            <p className="w-full h-2/4 pl-4 pt-4 font-semibold text-3xl">SAVINGS</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-[2.5fr_7.5fr] bg-slate-500 shadow-md">
                        <div className="flex justify-center items-center bg-[#0A512F]">
                            <img src={RepaidDash}></img>
                        </div>
                        <div className="bg-white">
                            <p className="w-full h-2/4 pl-4 pt-4 font-bold text-3xl">30</p>
                            <p className="w-full h-2/4 pl-4 pt-4 font-semibold text-3xl">REPAID LOANS</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-[2.5fr_7.5fr] bg-slate-500 shadow-md">
                        <div className="flex justify-center items-center bg-[#0A512F]">
                            <img src={CashReceivedDash}></img>
                        </div>
                        <div className="bg-white">
                            <p className="w-full h-2/4 pl-4 pt-4 font-bold text-3xl">1,000,000</p>
                            <p className="w-full h-2/4 pl-4 pt-4 font-semibold text-3xl">CASH RECEIVED</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="h-5/6 w-5/6">
                    <Table columns={verifierColumns} title={() => "Applied Loans"} pagination={{position: ["bottomCenter"]}}/>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default VerifierDashboard