import Home from "../assets/home.png";
import Payments from "../assets/paymentnav.png";
import Budget from "../assets/budget.png";
import Card from "../assets/Card.png";
import Notification from "../assets/notification.png";
import Message from "../assets/message.png";
import Profile from "../assets/profile.png";
import Menu from "../assets/menu.png";

function Navbar(props: {
    isUser?: boolean,
    isVerifier?: boolean 
}) {
    let role: string;
    if (props.isUser === true) {
        role = "User";
    } else if (props.isUser === false || props.isUser === null) {
        role = "Admin";
    } else {
        role = "Verifier";
    }

  return (
    <div className="h-16 w-full">
        <nav className="grid grid-cols-[8fr_2fr] h-full w-full bg-white shadow-md">
            <div className="flex items-center h-full w-full pl-4 font-extrabold text-green-700 text-2xl">
                <p className="flex items-center w-2/6 h-full">CREDIT APP</p>
                {props.isUser && <div className="flex items-center justify-evenly w-3/6 h-full"><img className="cursor-pointer" src={Home}></img><img className="cursor-pointer" src={Payments}></img><img className="cursor-pointer" src={Budget}></img><img className="cursor-pointer" src={Card}></img></div>}
            </div>
            <div className="flex items-center justify-evenly h-full w-full font-bold text-green-700">
                <img className="cursor-pointer" src={Notification}></img>
                <img className="cursor-pointer" src={Message}></img>
                <img className="cursor-pointer" src={Profile}></img>
                {role}
                <img className="cursor-pointer" src={Menu}></img>
            </div>
        </nav>
    </div>
  )
}

export default Navbar