function Form() {
  return (
    <div className="flex justify-center items-center h-full absolute bg-opacity-50 bg-gray-600 w-full z-10">
        <div className="grid grid-rows-[1fr_8fr_1fr] bg-white h-5/6 w-3/4">
            <div className="flex justify-center items-center">
                <h1 className="font-extrabold text-2xl">Apply for a Loan</h1>
            </div>
            <div className="grid grid-cols-2">
                <div className="flex flex-col items-center justify-evenly pt-2">
                    <label className="w-3/4 text-black font-semibold text-xl p-1 cursor-pointer" htmlFor="name">Full name as it appears on bank account</label>
                    <input type="text" className="bg-white w-3/4 h-14 rounded-lg p-2 font-semibold outline-none border-2 border-slate-300" placeholder="Full name as it appears on bank account" id="name"/>
                    <label className="w-3/4 text-black font-semibold text-xl p-1 cursor-pointer" htmlFor="tenure">Loan tenure (in months)</label>
                    <input type="text" className="bg-white w-3/4 h-14 rounded-lg p-2 font-semibold outline-none border-2 border-slate-300" placeholder="Loan tenure (in months)" id="tenure"/>
                    <label className="w-3/4 text-black font-semibold text-xl p-1 cursor-pointer" htmlFor="reason">Reason for loan</label>
                    <textarea className="bg-white w-3/4 h-28 rounded-lg p-2 font-semibold outline-none border-2 border-slate-300" id="reason" placeholder="Reason for loan"/>
                </div>
                <div className="flex flex-col items-center justify-evenly pt-2">
                    <label className="w-3/4 text-black font-semibold text-xl p-1 cursor-pointer" htmlFor="need">How much do you need?</label>
                    <input type="text" className="bg-white w-3/4 h-14 rounded-lg p-2 font-semibold outline-none border-2 border-slate-300" placeholder="How much do you need?" id="need"/>
                    <label className="w-3/4 text-black font-semibold text-xl p-1 cursor-pointer" htmlFor="status">Emloyment status</label>
                    <input type="text" className="bg-white w-3/4 h-14 rounded-lg p-2 font-semibold outline-none border-2 border-slate-300" placeholder="Employment status" id="status"/>
                    <label className="w-3/4 text-black font-semibold text-xl p-1 cursor-pointer" htmlFor="address1">Employment address</label>
                    <input type="text" className="bg-white w-3/4 h-14 rounded-lg p-2 font-semibold outline-none border-2 border-slate-300" placeholder="Employment address" id="address1"/>
                    <label className="w-3/4 text-black font-semibold text-xl p-1 cursor-pointer" htmlFor="address2">Employment address</label>
                    <input type="text" className="bg-white w-3/4 h-14 rounded-lg p-2 font-semibold outline-none border-2 border-slate-300" placeholder="Employment address" id="address2"/>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <button className="bg-green-200 w-28 h-10 rounded-lg font-extrabold hover:bg-green-400 transition-all duration-300 ease-in">Submit</button>
            </div>
        </div>
    </div>
  )
}

export default Form