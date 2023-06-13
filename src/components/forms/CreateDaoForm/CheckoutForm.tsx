/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { CREATE_DAO_URL_PROPOSAL } from "../../../utils/constants/pages";
import CustomButton from "../../common/button";
import TextInput from "../../common/input/TextInput";
import CreateDaoHeader from "./CreateDaoheader";
import useLocalStorage from "../../../hooks/useLocalStorage";
import { removeKeys, uploadImage } from "../../../utils/helpers";
import { UserContext } from "../../../UserContext";
import { IContextType } from "../../../types";
import { useNavigate } from "react-router-dom";
import { useToastify } from "../../../hooks/useToastify";
import { Loader } from "../../../assets/svgs";

const CheckoutForm = () => {
  const navigate = useNavigate();
  const { alertToast } = useToastify();
  const [isLoading, setIsLoading] = useState(false);
  const { setLocalStorage, getLocalStorage, removeItem } = useLocalStorage();
  const [isUploading, setIsUploading] = useState(false);
  const [fileName, setFileName] = useState<string>('');
  const [result, setResult] = useState<{ type: string, message: string }>();
  const [logoLink, setLogoLink] = useState(getLocalStorage().dao_logo || '');
  const { createDAO } = useContext(UserContext) as IContextType;

  useEffect(() => {
    setLocalStorage({ key: 'dao_logo', value: logoLink });
  }, [logoLink]);

  const handleCheckout = async () => {
    const daoInfo = getLocalStorage().dao_info;
    const daoGroup = getLocalStorage().dao_group;
    const daoLogo = getLocalStorage().dao_logo;
    const daoSocials = [getLocalStorage().dao_socials[0].link];
    const initialMembers: string[] = [];
    for (let i = 0; i < daoGroup.member_wallet.length; i++) {
      if (daoGroup.member_wallet[i].wallet.slice(0, 3) == "ak_") {
        initialMembers.push(daoGroup.member_wallet[i].wallet);
      }
    }
    const dao = { name: daoInfo.daoName, description: daoInfo.daoPurpose, tokenSymbol: daoInfo.daoTokenSymbol, image: daoLogo, socials: daoSocials, initialMembers: initialMembers, startingBalance: 2 };
    try {
      setIsLoading(true);
      await createDAO(dao);
      removeKeys(removeItem);
      navigate("/daos")
      alertToast('success', 'You have successfully created a DAO!');
      setIsLoading(false);
    } catch (error: any) {
      alertToast('error', error.message);
      setIsLoading(false);
    }
  };

  const handleUploadImage = (e: any) => {
    setIsUploading(true);
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    formData.append("upload_preset", "mvybpnf0");
    uploadImage(formData, setLogoLink, setIsUploading, setFileName, setResult);
  };

  return (
    <div className="w-full">
      <form className="w-full">
        <CreateDaoHeader header="Create DAO assets" currentStage="5" hasStage />
        <p className="-mt-5 text-normal text-grey mb-8">Field are optional. If you skip, default image will be used instead. A logo form a flag of your DAO</p>
        <div className="relative">
          <TextInput
            label="DAO Logo:"
            type="file"
            placeholder="Paste a link to your png logo"
            accept="image/*"
            isCompulsory
            opacity="opacity-1"
            onChange={handleUploadImage}
          />
          <p className="text-normal absolute top-10 bg-white left-28 w-[80%]">{fileName || 'No file uploaded yet'}</p>
          {isUploading && (
            <div className="-mt-3 flex">
              <p className="text-sm text-grey">Uploading...</p>
              <div className="ml-4">{Loader}</div>
            </div>
          )}
          {result?.message && (
            <p className={`${result?.type === "success" ? 'text-quaternary' : 'text-error'} -mt-4 text-normal`}>{result && result?.message}</p>
          )}
        </div>


        <div className="h-px bg-grey my-10" />

        <div className="flex items-center justify-between mb-8 w-full">
          <div className="w-4/6">
            <p className="text-grey text-sm">Transaction</p>
            <p className="mt-1">Create New DAO</p>
          </div>
          <div className="flex">
            <div className="">
              <p className="text-grey text-sm">Inital DAO balance</p>
              <p className="mt-1">2 AE</p>
            </div>
          </div>
        </div>

        <div className="flex justify-between w-full">
          <div className="w-2/5">
            <CustomButton
              borderColor="border-grey"
              color="grey3"
              bg="bg-none"
              width="w-full"
              handleClick={() => navigate(CREATE_DAO_URL_PROPOSAL)}
            >
              Back
            </CustomButton>
          </div>
          <div className="w-2/5">
            <CustomButton
              bg="bg-quaternary"
              width="w-full"
              handleClick={handleCheckout}
              isLoading={isLoading}
              disabled={!getLocalStorage().dao_info || !getLocalStorage().dao_group}
            >
              Checkout
            </CustomButton>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
