/* eslint-disable jsx-a11y/anchor-is-valid */
import { useContext } from "react";
import { UserContext } from "../../../UserContext";
import { IContextType } from "../../../types";
import { ArrForward, DraftIcon, ProposalWriteIcon } from "../../../assets/svgs";
import useLocalStorage from "../../../hooks/useLocalStorage";

interface IProps {
  setEnableCreateProposal: (arg0: boolean) => void;
}

const AddProposalModal = ({ ...props }: IProps) => {
  const { setShowModal } = useContext(UserContext) as IContextType;
  const { getLocalStorage } = useLocalStorage();
return (
  <div className="flex justify-end my-4 absolute right-20">
    <div className="w-80 bg-white rounded-lg p-2 shadow-medium">
      <a href="#">
        <div className="bg-[#F4FFF1] rounded-md px-2 py-4 flex items-center w-full cursor-pointer hover:bg-[#CCFBAE] shadow-tiny trans">
          <div className="flex items-center w-2/12">
            {DraftIcon}
            <div className="h-6 w-px bg-quaternary ml-2" />
          </div>
          <div className="w-8/12">
            <p className="font-gilroyMd text-normal">Draft a Proposal</p>
            <p className="text-sm">for preliminary discussion</p>
          </div>
          <div className="flex justify-end w-2/12">{ArrForward}</div>
        </div>
      </a>
      <div className="bg-[#F4FFF1] rounded-md px-2 py-4 flex items-center w-full mt-2 cursor-pointer hover:bg-[#CCFBAE] shadow-tiny trans" onClick={() => getLocalStorage() ? props.setEnableCreateProposal(true) : setShowModal(true)}>
        <div className="flex items-center w-2/12">
          {ProposalWriteIcon}
          <div className="h-6 w-px bg-quaternary ml-2" />
        </div>
        <div className="w-8/12">
          <p className="font-gilroyMd text-normal">Proposal</p>
          <p className="text-sm">for a general vote for a decision</p>
        </div>
        <div className="flex justify-end w-2/12">{ArrForward}</div>
      </div>
    </div>
  </div>
);
};

export default AddProposalModal;
