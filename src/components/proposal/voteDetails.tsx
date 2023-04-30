import { useState } from "react";
import { CheckMark, DownArr, LikeIcon, UpArr } from "../../assets/svgs";
import { ExternalLink } from "../common/ExternalLink.tsx";

const VoteDetails = () => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div>
      <h1 className="font-gilroyMd text-lx">Votes</h1>
      <div>
        <div className="flex items-center">
          <div className="bg-primary rounded-full h-8 w-9 items-center justify-center flex">
            {CheckMark}
          </div>
          <div className="flex items-center bg-[#F4FFF1] border h-8 w-9 rounded-full border-quaternary hover:bg-light trans">
            {LikeIcon}
          </div>
          <div className="w-full border-grey border-dotted border"></div>
          <div className="bg-primary rounded-full h-8 w-9" />
        </div>
      </div>
      <div className="flex m-8 items-center w-full justify-between">
        <div className="flex items-cneter">
          <div className="bg-[#F4FFF1] px-2 py-px rounded-full text-dark font-gilroyBold">
            <p>Council</p>
          </div>
          <div className="h-5 w-px bg-grey mx-5" />
          <p className="text-sm">1/2 voices</p>
          <div className="h-5 w-px bg-grey mx-5" />
          <p className="text-sm font-gilroyBold">50%</p>
        </div>

        <div className="w-1/4 flex items-center">
          <div className="w-full bg-light rounded-full h-2.5">
            <div
              className="bg-quaternary h-2.5 rounded-full"
              style={{ width: "30%" }}
            />
          </div>
          <div
            className="mx-8 trans cursor-pointer"
            onClick={() => setShowDetails((details) => !details)}
          >
            {showDetails ? DownArr : UpArr}
          </div>
        </div>
      </div>
      <div>

      </div>
        <div className={`bg-[#FAFAFA] shadow-tiny flex items-center justify-between p-4 rounded-lg ${showDetails && 'invisible'}`}>
          <div className="flex">
            <div className="bg-quaternary w-8 h-4" />
            <p className="font-gilroyBold text-sm ml-4">cornflow.testnet</p>
          </div>
          <div className="flex">
            <p className="text-grey mr-8">30 Apr 2023 05:19:59</p>
            <ExternalLink url="www.google.come" />
          </div>
        </div>
    </div>
  );
};

export default VoteDetails;
