import { useNavigate } from "react-router-dom";
import Logo from "../../assets/icons/logo.svg";
import { FEEDS } from "../../utils/constants/pages";
import CustomButton from "../common/button";
import { NavLinks } from "./data";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="flex items-center w-full justify-between bg-bg fixed z-40 px-20 py-4" style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 50px" }}>
      <a href="/">
        <img src={Logo} alt="logo" className="w-4/6" />
      </a>
      <div className="flex justify-between w-2/4 items-center">
        {NavLinks.map((link) => (
          <div>
            <p key={link.id} className="cursor-pointer hover:text-primary trans">{link.title}</p>
            <div className="h-1"></div>
          </div>
        ))}
        <div>
          <CustomButton handleClick={() => navigate(FEEDS)}>Launch App</CustomButton>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;