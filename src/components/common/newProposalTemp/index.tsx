import { AlertIcon, CodeIcon, DislikeIcon, LikeIcon } from "../../../assets/svgs";
import { AllActiveProposal } from "../../proposal/data";
import { ExternalLink } from "../ExternalLink.tsx";
import DropdownInput from "../input/DropdownInput";

const NewProposalTemp = () => (
    <div className="w-full px-14">
    {AllActiveProposal.map((proposer) => (
      <div className="mb-16 py-3 cursor-pointer" key={proposer.id}>
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
                <div className="flex justify-between w-full">
                  {/* title of the DAO and link to the DAO */}
                  <div>
                    <div className="flex items-center mt-3">
                      <h3 className="font-gilroyBold text-gl">{proposer.type}</h3>
                      <ExternalLink url={proposer.wallet_addr} />
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-grey">Proposal</p>
                  <p className="font-gilroyBold">{proposer.proposer}</p>
                </div>
                {/* Description */}
                <div className="mt-4">
                  <p className="text-sm text-grey">Description</p>
                  <p className="w-4/5">
                    {proposer.desc}
                  </p>
                </div>

                <div className="flex justify-end">
                  <div className="flex mt-6 items-center w-2/12 justify-between text-right">
                    <div className="flex items-center">
                      {LikeIcon}
                      <p className="ml-4">{proposer.likes}</p>
                    </div>
                    <div className="flex items-center">
                      {DislikeIcon}
                      <p className="ml-4">{proposer.dislikes}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default NewProposalTemp;