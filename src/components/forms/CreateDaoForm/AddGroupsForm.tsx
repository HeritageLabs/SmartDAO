/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useState } from "react";
import { AddIcon } from "../../../assets/svgs";
import {
  CREATE_DAO_URL_PROPOSAL,
  CREATE_DAO_URL_SOCIALS,
} from "../../../utils/constants/pages";
import CustomButton from "../../common/button";
import TextInput from "../../common/input/TextInput";
import CreateDaoHeader from "./CreateDaoheader";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../../../hooks/useLocalStorage";

const initialState = {
  wallet: "",
  id: Date.now(),
  dao: 'Council'
};

const AddGroupsForm = () => {
  const navigate = useNavigate();
  const { setLocalStorage, getLocalStorage } = useLocalStorage();
  const [groupName, setGroupName] = useState<string>("Council");
  const [newMemberWallet, setNewMemberWallet] = useState(getLocalStorage().dao_group ? getLocalStorage().dao_group.member_wallet : [initialState]);


  const handleOnChange = (value: string, id: number) => {
    const prevValue = [...newMemberWallet];
    prevValue[id].wallet = value;
    setNewMemberWallet(prevValue);
  };
  const addNewMember = () => {
    setNewMemberWallet([...newMemberWallet, { ...initialState, wallet: '', dao: 'Council', id: Date.now() }]);
  };
  const removeNewMember = (idx: number) => {
    setNewMemberWallet(newMemberWallet.filter((_, index) => idx !== index));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLocalStorage({ key: 'dao_group', value: { group_name: groupName, member_wallet: newMemberWallet } });
    navigate(CREATE_DAO_URL_PROPOSAL);
  };

  return (
    <div className="w-full">
      <form className="w-full">
        <CreateDaoHeader header="Add Groups" currentStage="3" />
        <p className="-mt-7 text-normal text-grey mb-8">
          Adding groups to DAO during creation is not supported. Although, you
          can add more groups later in DAO settings.
        </p>

        <TextInput
          label="Your default group:"
          placeholder=""
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
          readOnly
        />

        <CreateDaoHeader header="Add Members" optional="" />

        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Add members to your DAO.
        </label>
        {newMemberWallet.map((new_member, idx) => (
          <TextInput
            key={new_member.id}
            label=""
            placeholder="Enter member wallet address"

            onChange={(e) => handleOnChange(e.target.value, idx)}
            value={new_member.wallet}
            hasCancel={newMemberWallet.length > 1}
            handleClickCancel={() => removeNewMember(idx)}
          />
        ))}
        <div
          className="flex items-center text-sm hover:text-quaternary font-gilroyMd cursor-pointer mb-8 trans justify-end"
          onClick={addNewMember}
        >
          Add more members{AddIcon}
        </div>

        <div className="flex justify-between w-full">
          <div className="w-2/5">
            <CustomButton
              borderColor="border-grey"
              color="grey3"
              bg="bg-none"
              width="w-full"
              handleClick={() => navigate(CREATE_DAO_URL_SOCIALS)}
            >
              Back
            </CustomButton>
          </div>
          <div className="w-2/5">
            <CustomButton
              bg="bg-quaternary"
              width="w-full"
              handleClick={handleSubmit}
              disabled={!newMemberWallet}
            >
              Next
            </CustomButton>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddGroupsForm;
