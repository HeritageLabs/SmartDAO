/* eslint-disable jsx-a11y/anchor-is-valid */
import { useContext, useEffect, useState } from "react";
import Logo from "../../assets/icons/logo-dark.svg";
import { LogoutIcon } from "../../assets/svgs";
import { useToastify } from "../../hooks/useToastify";
import { IContextType } from "../../types";
import { UserContext } from "../../UserContext";
import CustomButton from "../common/button";
import DropdownMenu from "../common/dropdownMenu";
import SearchInput from "../common/input/SearchInput";
import ConnectWalletPopup from "../modals/connectWalletPopup";
import { useNavigate } from "react-router-dom";
import { DAOS, FEEDS, PROPOSALS, VIEW_MY_DAO } from "../../utils/constants/pages";

const AuthNav = () => {
  const { loginUser, logoutUser, handleSearchDaos, handleSearchProposals, account } = useContext(UserContext) as IContextType;
  const { alertToast } = useToastify();
  const navigate = useNavigate();

  const handleSearch = (value: string) => {
    const path = window.location.pathname;
    if (value) {
      if (path == DAOS || path == VIEW_MY_DAO || path == FEEDS) {
        handleSearchDaos(value);
      }
      if (path == PROPOSALS || path == FEEDS) {
        handleSearchProposals(value);
      }
    }
  }

  const handleLogin = async (e: Event) => {
    e.preventDefault();
    console.log("Called");
    await loginUser();
    alertToast('success', 'Connected successfully');
  }

  useEffect(() => {
    handleSearchProposals("");
    handleSearchDaos("");
  }, [])

  return (
    <nav
      className="flex items-center w-full justify-between bg-lightGrey fixed z-40 px-14 py-3"
      style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}
    >
      <div onClick={() => { navigate("/") }}>
        <img src={Logo} alt="logo" className="w-40" />
      </div>
      <div className="flex justify-between w-2/4 items-center">
        <SearchInput handleChange={({ target }) => handleSearch(target.value)} />
      </div>
      {account.address ? (
        <div className="flex items-center">
          <div className="pr-3 w-fit cursor-pointer"><DropdownMenu>
            <li>
              <div
                className="block px-6 py-4 flex items-center hover:bg-[#F4FFF1] hover:text-quaternary font-gilroyMd trans"
                onClick={async () => { await logoutUser(); alertToast('error', 'Disconnected successfully'); }}
              >
                <div className="mr-3">{LogoutIcon}</div>
                <p>Sign Out</p>
              </div>
            </li>
          </DropdownMenu></div>
          <CustomButton width="w-44" bg="bg-light" color="bg-black" handleClick={(e) => e.preventDefault()}>
            <p className="text-ellipsis whitespace-nowrap overflow-hidden">{account.address}</p>
          </CustomButton>
        </div>
      ) : (
        // <CustomButton bg="bg-quaternary" handleClick={(e) => { setShowModal(true); e.preventDefault(); }}>
        <CustomButton bg="bg-quaternary" handleClick={handleLogin} >
          Connect wallet
        </CustomButton>
      )}

      {/* {showModal && (
        <ConnectWalletPopup
          setOpenModal={setShowModal}
          handleMetamaskConnect={async () => { await loginUser(); setShowModal(false); alertToast('success', 'Connected successfully'); }}
        />
      )} */}
    </nav>
  );
};

export default AuthNav;
