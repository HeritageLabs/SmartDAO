/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { useState } from "react";
import { AddIcon } from "../../../assets/svgs";
import { CREATE_DAO_URL, CREATE_DAO_URL_ADD_GROUPS } from "../../../utils/constants/pages";
import CustomButton from "../../common/button";
import TextInput from "../../common/input/TextInput";
import CreateDaoHeader from "./CreateDaoheader";
import useLocalStorage from "../../../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";

const initialState = {
  link: "",
  id: Date.now(),
};

const SocialsInfoForm = () => {
  const navigate = useNavigate();
  const { setLocalStorage, getLocalStorage } = useLocalStorage();

  const [socialMediaLink, setSocialMediaLink] = useState(getLocalStorage().dao_socials || [initialState]);

  const handleOnChange = (value: string, id: number) => {
    const prevValue = [...socialMediaLink];
    prevValue[id].link = value;
    setSocialMediaLink(prevValue);
  };
  const addSocialMedia = () => {
    setSocialMediaLink([...socialMediaLink, { ...initialState, link: '', id: Date.now() }]);
  };
  const removeSocial = (idx: number) => {
   setSocialMediaLink(socialMediaLink.filter((_, index) => idx !== index));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLocalStorage({ key: 'dao_socials', value: socialMediaLink });
    navigate(CREATE_DAO_URL_ADD_GROUPS);
};

  return (
    <div className="w-full">
      <form className="w-full">
        <CreateDaoHeader
          header="Links and socials"
          optional="(Optional)"
          currentStage="2"
        />
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Looking to grow the DAO member? Add links to allow people to learn
          more about your DAO.
        </label>
        {socialMediaLink.map((social_media, idx) => (
          <TextInput
            key={social_media.id}
            label=""
            placeholder="Enter link"
            onChange={(e) => handleOnChange(e.target.value, idx)}
            value={social_media.link}
            hasCancel={socialMediaLink.length > 1}
            handleClickCancel={() => removeSocial(idx)}
          />
        ))}
        <div
          className="flex items-center text-sm hover:text-quaternary font-gilroyMd cursor-pointer mb-8 trans justify-end"
          onClick={addSocialMedia}
        >
          Add more social media{AddIcon}
        </div>

        <div className="flex justify-between w-full">
          <div className="w-2/5">
            <CustomButton
              borderColor="border-grey"
              color="grey3"
              bg="bg-none"
              width="w-full"
              href={CREATE_DAO_URL}
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

export default SocialsInfoForm;
