import Logo from "../../assets/icons/logo-dark.svg";
import CustomButton from "../common/button";
import SearchInput from "../common/input/SearchInput";

const AuthNav = () => {
  return (
    <nav className="flex items-center w-full justify-between bg-lightGrey fixed z-40 px-20 py-3" style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 50px" }}>
      <img src={Logo} alt="logo" className="w-2/12" />
      <div className="flex justify-between w-2/4 items-center">
      <SearchInput />
      </div>
        <div>
            <CustomButton bg="bg-quaternary">Connect wallet</CustomButton>
        </div>
    </nav>
  );
};

export default AuthNav;