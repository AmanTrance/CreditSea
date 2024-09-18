import { Routes, Route } from "react-router-dom";
import UserDashboard from "./components/UserDashboard";
import VerifierDashboard from "./components/VerifierDashboard";
import AdminDashboard from "./components/AdminDashboard";

function App() {
  return (
    <div className="h-full w-full bg-slate-200 overflow-y-scroll">
      <Routes>
        <Route path="/" element={<UserDashboard/>}/>
        <Route path="/dashboard" element={<VerifierDashboard/>}/>
        <Route path="/admin" element={<AdminDashboard/>}/>
      </Routes>
    </div>
  )
}

export default App