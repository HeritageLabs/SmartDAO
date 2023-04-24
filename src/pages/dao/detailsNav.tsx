import { ReactNode, useState } from "react";
import { AddIc, DepositIcon } from "../../assets/svgs";
import { ExternalLink } from "../../components/common/ExternalLink.tsx";
import TextInput from "../../components/common/input/TextInput";
import DaoDetail from "./data";

interface IDetailsNav {
    children: ReactNode;
}

const DetailsNav = ({children}:IDetailsNav) => {
  const [deposit, setDeposit] = useState("");
  return (

    <div className="px-8">
      <div className="flex items-end justify-between">
        <div className="flex items-end w-4/12 justify-between">
          <div className="h-32 w-32 rounded-2xl items-center flex justify-center shadow-normal">
            <img
              width={80}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/2560px-Coca-Cola_logo.svg.png"
              alt="logo"
            />
          </div>
          <div className="text-center">
            <p className="text-grey text-sm">Members</p>
            <p className="font-gilroyBold">1</p>
          </div>
          <div className="text-center">
            <p className="text-grey text-sm">Dao Version</p>
            <p className="font-gilroyBold">1.2</p>
          </div>
        </div>
        <form className="flex items-center" noValidate>
          <TextInput
            mb="0"
            placeholder="Deposit to DAO"
            type="number"
            value={deposit}
            onChange={({ target }) => setDeposit(target.value)}
          />
          <div className="h-9 w-9 mt-2 bg-[#F8F8F8] text-[#8C8F95] flex items-center rounded-lg -ml-10 cursor-pointer hover:bg-[#F4FFF1] trans">
            {DepositIcon}
          </div>
        </form>
      </div>
      {/* Nav */}
      <div className="flex mt-12 bg-white shadow-medium rounded-xl items-center justify-between hover:shadow-extra trans">
        <div className="flex items-center m-3">
          <div className="h-14 w-14 rounded-lg flex items-center justify-center shadow-inset border border-lightGrey">
            <img
              width={40}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/2560px-Coca-Cola_logo.svg.png"
              alt="logo"
            />
          </div>
          <div className="ml-4">
            <div className="flex items-center">
              <h2 className="font-gilroyBold text-md">Carsmart</h2>
              <ExternalLink url="" />
            </div>
            <p className="text-grey text-sm mt-px">carsmart.spruge.net</p>
          </div>
        </div>
        <div className="flex w-2/5 justify-between items-center">
          {DaoDetail.map((detail) => (
            <a href={detail.url}>
              <div
                className="hover:bg-[#F4FFF1] cursor-pointer rounded-lg p-1 trans"
                key={detail.name}
              >
                {detail.icon}
                <p className="text-[10px]">{detail.name}</p>
              </div>
            </a>
          ))}
        <div className="bg-quaternary py-6 px-3 rounded-tr-xl rounded-br-xl ml-3 cursor-pointer">{AddIc}</div>
        </div>
      </div>

      <div className="my-8">{children}</div>
    </div>
  );
};

export default DetailsNav;
