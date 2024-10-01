import { Routes, Route } from "react-router-dom";
import UserDashboard from "./components/UserDashboard";
import VerifierDashboard from "./components/VerifierDashboard";
import AdminDashboard from "./components/AdminDashboard";
import { Provider } from 'react-redux'
import { store } from './store.tsx'
import Home from "./components/Home.tsx";

function App() {
  return (
    <div className="h-full w-full bg-slate-200 overflow-y-scroll">
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/user" element={<UserDashboard/>}/>
          <Route path="/verifier" element={<VerifierDashboard/>}/>
          <Route path="/admin" element={<AdminDashboard/>}/>
        </Routes>
      </Provider>
    </div>
  )
}

export default App