import { useState } from "react";
import { CREATE_DAO_URL_PROPOSAL } from "../../../utils/constants/pages";
import CustomButton from "../../common/button";
import TextInput from "../../common/input/TextInput";
import CreateDaoHeader from "./CreateDaoheader";

const CheckoutForm = () => {
  const [logoLink, setLogoLink] = useState('');
  return (
    <div className="w-full">
      <form className="w-full">
        <CreateDaoHeader header="Create DAO assets" currentStage="5" hasStage />
        <p className="-mt-5 text-normal text-grey mb-8">Field are optional. If you skip, default image will be used instead. A logo form a flag of your DAO</p>

        <TextInput
          label="DAO Logo:"
          placeholder="Paste a link to your png logo"
          value={logoLink}
          onChange={(e) => setLogoLink(e.target.value)}
        />

        <div className="h-px bg-grey my-10" />

        <div className="flex items-center justify-between mb-8 w-full">
          <div className="w-4/6">
            <p className="text-grey text-sm">Transaction</p>
            <p className="mt-1">Create New DAO</p>
          </div>
          <div className="flex">
            <div className="">
              <p className="text-grey text-sm">Cost</p>
              <p className="mt-1">6 FIGO</p>
            </div>
            <div className="ml-8">
              <p className="text-grey text-sm">TGas</p>
              <p className="mt-1">300</p>
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
              href={CREATE_DAO_URL_PROPOSAL}
            >
              Back
            </CustomButton>
          </div>
          <div className="w-2/5">
            <CustomButton
              bg="bg-quaternary"
              width="w-full"
              // href={CREATE_DAO_URL_CHECKOUT}
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
