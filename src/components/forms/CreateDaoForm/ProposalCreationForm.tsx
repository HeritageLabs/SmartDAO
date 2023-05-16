/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useState } from "react";
import { ProposalCreationData } from "../../../utils/constants/data";
import { CREATE_DAO_URL_ADD_GROUPS, CREATE_DAO_URL_CHECKOUT } from "../../../utils/constants/pages";
import CustomButton from "../../common/button";
import CreateDaoHeader from "./CreateDaoheader";
import useLocalStorage from "../../../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";

interface IProposalCreation {
  value: string;
}

const ProposalCreationForm = () => {
  const navigate = useNavigate();
  const { setLocalStorage, getLocalStorage } = useLocalStorage();

  const [proposalRight, setProposalRight] = useState<IProposalCreation[]>(getLocalStorage().dao_right || []);
  const [votingPermission, setVotingPermission] = useState<IProposalCreation[]>(getLocalStorage().voting_permission || []);

  const handleProposalChange = (value: string) => {
    if (proposalRight.includes(value)) {
      const removeRight = proposalRight.filter((val) => val !== value);
      setProposalRight(removeRight)
    } else {
      setProposalRight([...proposalRight, value]);
    }
  };
  const handleVotingPermissionChange = (value: string) => {
    if (votingPermission.includes(value)) {
      const removePermission = votingPermission.filter((val) => val !== value);
      setVotingPermission(removePermission)
    } else {
      setVotingPermission([...votingPermission, value]);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLocalStorage({ key: 'dao_right', value: proposalRight });
    setLocalStorage({ key: 'voting_permission', value: votingPermission });
    navigate(CREATE_DAO_URL_CHECKOUT);
  };

  return (
    <div className="w-full">
      <form className="w-full">
        <CreateDaoHeader header="Proposal Creation" currentStage="4" hasStage />
        <p className="-mt-5 text-normal text-grey mb-8">Choose what creation rights you give DAO groups. This can be changed in settings later</p>

        <div className="relative overflow-x-auto mb-9">
          <table className="w-full text-sm text-left">
            <thead className="text-xs font-gilroyBold bg-[#F4FFF1]">
              <tr>
                <th scope="col" className="px-6 py-3">

                </th>
                <th scope="col" className="px-6 py-3">
                  All
                </th>
                <th scope="col" className="px-6 py-3">
                  Council
                </th>
              </tr>
            </thead>
            <tbody>
              {ProposalCreationData.map((create) => (
                <tr className="bg-light" key={create.value}>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium flex"
                  >
                    <div className="mr-1">{create.valueIcon}</div>
                    {create.value}
                  </th>
                  <td className="px-6 py-4">
                    <input type="checkbox" onChange={() => handleProposalChange(create.value)} defaultChecked={proposalRight[0]} />
                  </td>
                  <td className="px-6 py-4">
                    <input type="checkbox" disabled defaultChecked />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <CreateDaoHeader header="Voting Permissions" currentStage="5" />
        <p className="-mt-5 text-normal text-grey mb-8">Choose what voting rights you give DAO groups.</p>

        <div className="relative overflow-x-auto mb-9">
          <table className="w-full text-sm text-left">
            <thead className="text-xs font-gilroyBold bg-[#F4FFF1]">
              <tr>
                <th scope="col" className="px-6 py-3">

                </th>
                <th scope="col" className="px-6 py-3">
                  All
                </th>
                <th scope="col" className="px-6 py-3">
                  Council
                </th>
              </tr>
            </thead>
            <tbody>
              {ProposalCreationData.map((create) => (
                <tr className="bg-light" key={create.value}>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium flex"
                  >
                    <div className="mr-1">{create.valueIcon}</div>
                    {create.value}
                  </th>
                  <td className="px-6 py-4">
                    <input type="checkbox" value={create.value} onChange={() => handleVotingPermissionChange(create.value)} defaultChecked={votingPermission[0]} />
                  </td>
                  <td className="px-6 py-4">
                    <input type="checkbox" disabled defaultChecked />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between w-full">
          <div className="w-2/5">
            <CustomButton
              borderColor="border-grey"
              color="grey3"
              bg="bg-none"
              width="w-full"
              handleClick={() => navigate(CREATE_DAO_URL_ADD_GROUPS)}
            >
              Back
            </CustomButton>
          </div>
          <div className="w-2/5">
            <CustomButton
              bg="bg-quaternary"
              width="w-full"
              handleClick={handleSubmit}
            >
              Next
            </CustomButton>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProposalCreationForm;
