import { useState } from "react";
import Logo from "../../assets/icons/logo-dark.svg";
import CustomButton from "../common/button";
import SearchInput from "../common/input/SearchInput";
import ConnectWalletPopup from "../modals/connectWalletPopup";

const AuthNav = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <nav
      className="flex items-center w-full justify-between bg-lightGrey fixed z-40 px-14 py-3"
      style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}
    >
      <a href="/">
        <img src={Logo} alt="logo" className="w-40" />
      </a>
      <div className="flex justify-between w-2/4 items-center">
        <SearchInput />
      </div>
      <CustomButton bg="bg-quaternary" handleClick={() => setShowModal(true)}>
        Connect wallet
      </CustomButton>

      {showModal && (
        <ConnectWalletPopup
          setOpenModal={setShowModal}
          heading="Thanks for choosing Snappay."
          subHeading="A confirmation mail will be sent to you within the next 24hrs once your account has been activated."
        />
      )}
    </nav>
  );
};

export default AuthNav;
