import { NavigateFunction, useNavigate } from "react-router-dom"

function Home() {
    const navigate: NavigateFunction = useNavigate();

    const handleUser = () => {
        navigate("user");
    }

    const handleVerifier = () => {
        navigate("verifier");
    }

    const handleAdmin = () => {
        navigate("admin")
    }

  return (
    <div className="flex justify-center items-center h-full w-full bg-slate-300">
        <div className="grid grid-rows-2 h-2/4 md:w-3/4 w-full">
            <div className="flex justify-center items-center text-black font-mono text-4xl font-semibold underline">Choose your profile</div>
            <div className="flex justify-evenly items-center">
                <button id="user" className="bg-white h-12 w-1/4 md:w-40 rounded-lg shadow-md hover:bg-green-300 font-semibold transition-all duration-300 ease-in" onClick={handleUser}>User</button>
                <button id="verifier" className="bg-white h-12 w-1/4 md:w-40 rounded-lg shadow-md hover:bg-green-300 font-semibold transition-all duration-300 ease-in" onClick={handleVerifier}>Verifier</button>
                <button id="admin" className="bg-white h-12 w-1/4 md:w-40 rounded-lg shadow-md hover:bg-green-300 font-semibold transition-all duration-300 ease-in" onClick={handleAdmin}>Admin</button>
            </div>
        </div>
    </div>
  )
}

export default Home