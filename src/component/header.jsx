import menu from "../assets/icons/menu.svg";
import notification from "../assets/icons/notification.svg";
import accounticon from "../assets/icons/accounticon.svg";
import Search from "../assets/icons/Search.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="border-b-[2px] pt-[19px] pb-[15px] flex flex-row mx-[25px] min-[500px]:mx-[55px]  justify-between items-center">
      <QuickTools />
      <Front />
      <Rear />
      <Menu />
    </nav>
  );
}

function Menu() {
    return(
        <div className="min-[500px]:hidden ">
        <img src={menu} alt="menu icon" />
      </div>
    )
}


function QuickTools() {
  return(
      <div className="hidden min-[600px]:flex gap-[25px] ">
         <img src={menu} alt="menu icon" />
        <img className="w-[22px] " src={notification} alt="notification icon" />
        {/* <img src={Search} alt="search icon" /> */}
      </div>
  )
}

function Front() {
  return (
    <Link to={'/'}>
     <p className="font-Pacifico text-darkgreen min-[500px]:text-[25px]">
     NewsWebsite
    </p>
    </Link>
  );
}

function Rear() {
  return (
    <div className="hidden min-[500px]:flex items-center gap-[10px]">
      <div className="bg-black flex px-[5px] items-center gap-[5px] w-[85px] h-[32px]">
        <img
          className="w-[20px] h-[20px] "
          src={accounticon}
          alt="account icon"
        />
        <p className="font-montserrat font-regular text-white text-[12px] ">
          Sign In
        </p>
      </div>
      <div className="flex-col pt-[6px] items-center border border-black flex items-center w-[85px]  h-[32px]">
        <p className="font-montserrat font-medium text-[12px] ">Suscribe</p>
      </div>
    </div>
  );
}

export default Header;
