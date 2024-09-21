import Home from "../assets/home.png";
import Payments from "../assets/paymentnav.png";
import Budget from "../assets/budget.png";
import Card from "../assets/Card.png";
import Notification from "../assets/notification.png";
import Message from "../assets/message.png";
import Profile from "../assets/profile.png";
import Menu from "../assets/menu.png";
import DropMenu from "../assets/align-justify.png";
import { useAppDispatch } from "../utils/hooks";
import { change } from "../slices/menuSlice";


function Navbar(props: {
    isUser?: boolean,
    isVerifier?: boolean 
}) {
    const dispatch = useAppDispatch();

    let role: string;
    if (props.isUser === true) {
        role = "User";
    } else if (props.isUser === false || props.isUser === null) {
        role = "Admin";
    } else {
        role = "Verifier";
    }

    const handleMenu = () => {
        dispatch(change());
    }

  return (
    <div className="h-16 w-full relative">
        <nav className="grid grid-cols-[7fr_3fr] h-full w-full bg-white shadow-md">
            <div className="flex items-center h-full w-full pl-4 font-extrabold text-green-700">
                <p className="flex items-center md:w-3/6 h-full w-2/6 text-sm md:text-2xl">CREDIT APP</p>
                <div className="w-24 absolute lg:hidden md:ml-40 ml-24">{ !props.isUser && <img className="md:h-auto md:w-auto h-5 w-5 cursor-pointer" src={DropMenu} onClick={handleMenu}></img> }</div>
                { props.isUser && <div className="flex items-center justify-evenly w-5/6 h-full"><img className="md:h-auto md:w-auto h-5 w-5 cursor-pointer" src={Home}></img><img className="md:h-auto md:w-auto h-5 w-5 cursor-pointer" src={Payments}></img><img className="md:h-auto md:w-auto h-5 w-5 cursor-pointer" src={Budget}></img><img className="md:h-auto md:w-auto h-5 w-5 cursor-pointer" src={Card}></img></div> }
            </div>
            <div className="flex items-center justify-evenly h-full w-full font-bold text-green-700">
                <img className="h-5 w-5 md:h-auto md:w-auto cursor-pointer" src={Notification}></img>
                <img className="h-5 w-5 md:h-auto md:w-auto cursor-pointer" src={Message}></img>
                <img className="h-5 w-5 md:h-auto md:w-auto cursor-pointer" src={Profile}></img>
                <p className="hidden md:inline text-md">{role}</p>
                <img className="cursor-pointer" src={Menu}></img>
            </div>
        </nav>
    </div>
  )
}

export default Navbar