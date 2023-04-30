import { useState } from "react";
import { AlertIcon, ChatIcon, CodeIcon, DislikeIcon, LikeIcon } from "../../../assets/svgs";
import CustomButton from "../button";
import DropdownInput from "../input/DropdownInput";
import TextAreaInput from "../input/TextAreaInput";
import TextInput from "../input/TextInput";

const NewProposalTemp = () => {
  const [desc, setDesc] = useState('');
  const [amount, setAmount] = useState('');
return (
    <div className="w-full px-14">
      <div className="mb-16 py-3">
        <div className="w-full">
          <p className="text-sm text-grey justify-end flex my-1">
            {AlertIcon}
          </p>
          <div
            className="rounded-lg h-fit shadow-card"
          >
            <div className="flex">
              <div className="w-20 bg-bg flex">
                <div className="mx-auto mt-4">{CodeIcon}</div>
              </div>
              <div className="px-6 py-3 w-full">
                <DropdownInput label="Proposal type: Transfer/Add bounty" />
                <div className="mt-4">
                  <p className="text-sm text-grey">Proposer</p>
                  <p className="font-gilroyBold">c5e06085e92dcac470cc7b8126bcb926dd7d8c5562fbc84022578a2b03e5ff23</p>
                </div>
                {/* Description */}
                <div className="mt-4">
                  <TextAreaInput label="Description:" placeholder="Enter the description of this proposal" onChange={(e) => setDesc(e.target.value)} value={desc} />
                </div>

                <div className="flex justify-between">
                  <TextInput label="Amount" placeholder="00.0000" type="number" onChange={({ target }) => setAmount(target.value)} value={amount} />
                  <div />
                  <div className="flex mt-6 items-center w-2/12 justify-between text-right">
                    <div className="flex items-center border h-9 w-9 rounded-full border-tertiary">
                      {LikeIcon}
                    </div>
                    <div className="flex items-center border h-9 w-9 rounded-full border-tertiary">
                      {DislikeIcon}
                    </div>

                    <div className="flex items-center w-full">
                      <div className="flex items-center border h-9 w-9 rounded-full border-tertiary shadow-card bg-white hover:bg-light trans">
                        {ChatIcon}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex w-full my-5 justify-end">
                  <CustomButton width="w-72" disabled={!desc || !amount}>Propose</CustomButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
);
    };

export default NewProposalTemp;