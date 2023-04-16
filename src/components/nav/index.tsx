import Logo from "../../assets/icons/logo.svg";
import CustomButton from "../common/button";
import { NavLinks } from "./data";

const Navbar = () => {
  return (
    <nav className="flex items-center w-full justify-between">
      <img src={Logo} alt="logo" className="w-2/12" />
      <div className="flex justify-between w-2/4 items-center">
        {NavLinks.map((link) => (
            <div>
                <p key={link.id} className="cursor-pointer hover:text-primary trans">{link.title}</p>
                <div className="h-1"></div>
            </div>
        ))}
        <div className="">
            <CustomButton>Launch App</CustomButton>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
