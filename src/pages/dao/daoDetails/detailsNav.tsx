import { ReactNode, useContext, useRef, useState } from "react";
import { AddIc, DepositIcon, Loader } from "../../../assets/svgs";
import { ExternalLink } from "../../../components/common/ExternalLink.tsx";
import TextInput from "../../../components/common/input/TextInput";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import AddProposalModal from "./addProposal";
import DaoMenu from "./data";
import { UserContext } from "../../../UserContext";
import { IContextType } from "../../../types";
import { useNavigate } from "react-router-dom";
import { useToastify } from "../../../hooks/useToastify";
import useCurrentLocation from "../../../hooks/useCurrentLocation";

interface IDetailsNav {
  children: ReactNode;
  setEnableCreateProposal: (args0: boolean) => void;
  dao: any;
  setShowHome: (arg0: boolean) => void;
  setShowProposals: (arg0: boolean) => void;
  setShowMembers: (arg0: boolean) => void;
  setShowFunds: (arg0: boolean) => void;
}

interface IMenuAction {
  name: string;
  setFunction: (arg0: boolean) => void
}

const DetailsNav = ({ children, setEnableCreateProposal, dao, setShowHome, setShowProposals, setShowMembers, setShowFunds }: IDetailsNav) => {
  const { pathname } = useCurrentLocation();
  const [deposit, setDeposit] = useState("");
  const [isDonating, setIsDonating] = useState(false);
  const { alertToast } = useToastify();
  const [showAddProposal, setShowAddProposal] = useState(false);
  const wrapper = useRef(null);
  useOnClickOutside(wrapper, setShowAddProposal);
  const { donate, getAmountDonated } = useContext(UserContext) as IContextType;
  const [activeMenuIndex, setActiveMenuIndex] = useState<number>(0);

  const menuActions: IMenuAction[] = [
    { name: "Home", setFunction: setShowHome },
    { name: "Proposals", setFunction: setShowProposals },
    { name: "Funds", setFunction: setShowFunds },
    { name: "Members", setFunction: setShowMembers },
    { name: "settings", setFunction: setShowHome },
    { name: "pools", setFunction: setShowHome }
  ]

  const ChangeActiveMenu = (newIndex: number) => {
    menuActions[activeMenuIndex].setFunction(false);
    menuActions[newIndex].setFunction(true)
    // menuActions.map((m, index) => {
    //   m.setFunction(index == activeMenuIndex ? false : true);
    // })
  }

  async function handleDeposit() {
    try {
      setIsDonating(true);
      await donate(dao.contractAddress, Number(deposit) * 1e18);
      alertToast('success', 'Donation successful!');
      setDeposit("");
      setIsDonating(false);
      getAmountDonated(deposit);
    } catch (error: any) {
      // window.alert(error.message)
      alertToast('error', error.message);
      setIsDonating(false);
    }
  }
  return (
    <div className="px-8">
      <div className="bg-lightGrey h-28 -mt-14 -ml-8 -mr-20 z-10" />
      <div className="flex items-end justify-between">
        <div className="flex items-end w-7/12 justify-between z-0 -mt-[35px]">
          <div className="h-32 w-32 rounded-2xl items-center flex justify-center shadow-normal bg-white">
            <img
              width={80}
              src={dao.image}
              alt="logo"
            />
          </div>
          <div className="text-center">
            <p className="text-grey text-sm">Members</p>
            <p className="font-gilroyBold">{dao.members.length || 0}</p>
          </div>
          <div className="text-center">
            <p className="text-grey text-sm">Quorum</p>
            <p className="font-gilroyBold">{Number(dao.quorum) / 100}%</p>
          </div>
          <div className="text-center">
            <p className="text-grey text-sm">Voting time</p>
            <p className="font-gilroyBold">{Number(dao.votingTime) / 3600000}h</p>
          </div>
          <div className="text-center">
            <p className="text-grey text-sm">Dao Version</p>
            <p className="font-gilroyBold">1.0</p>
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
          <div className="h-9 w-9 bg-[#F8F8F8] text-[#8C8F95] flex items-center rounded-lg -ml-10 cursor-pointer hover:bg-[#F4FFF1] trans" onClick={() => handleDeposit()}>
            {isDonating ? Loader : DepositIcon}
          </div>
        </form>
      </div>
      {/* Nav */}
      <div className="flex mt-14 bg-white shadow-medium rounded-xl items-center justify-between hover:shadow-extra trans relative">
        <div className="flex items-center m-3">
          <div className="h-14 w-14 rounded-lg flex items-center justify-center shadow-inset border border-lightGrey">
            <img
              width={40}
              src={dao.image}
              alt="logo"
            />
          </div>
          <div className="ml-4">
            <div className="flex items-center">
              <h2 className="font-gilroyBold text-md">{dao.name[0].toUpperCase() + dao.name.slice(1)}</h2>
              <ExternalLink url={dao.socials[0]} />
            </div>
            <p className="text-grey text-sm mt-px">{dao.socials[0]}</p>
          </div>
        </div>
        <div className="flex w-2/5 justify-between items-center">
          {DaoMenu.map((item, index) => (
            <div onClick={() => { index != activeMenuIndex && ChangeActiveMenu(index); setActiveMenuIndex(index) }}>
              <div
                className={`hover:bg-[#F4FFF1] cursor-pointer rounded-lg p-1 trans ${pathname.includes(item.name.toLocaleLowerCase()) ? 'bg-[#F4FFF1] text-quaternary' : 'bg-none'} `}
                key={item.name}
              >
                {item.icon}
                <p className="text-[10px]">{item.name}</p>
              </div>
            </div>
          ))}

          <div className="bg-quaternary py-6 px-3 rounded-tr-xl rounded-br-xl ml-3 cursor-pointer" ref={wrapper} onClick={() => setShowAddProposal((show) => !show)}>{AddIc}</div>
        </div>
      </div>
      {showAddProposal && (<AddProposalModal setEnableCreateProposal={setEnableCreateProposal} />)}

      <div className="my-12">{children}</div>
    </div>
  );
};

export default DetailsNav;