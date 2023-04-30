import { useState } from "react";
import { FeedsLayout } from "../../components/layouts";
import DetailsNav from "../dao/daoDetails/detailsNav";
import { AllActiveProposal } from "../../components/proposal/data";
import { ChatIcon, CodeIcon, DislikeIcon, LikeIcon } from "../../assets/svgs";
import { ExternalLink } from "../../components/common/ExternalLink.tsx";
import ProposalUpdate from "../dao/daoDetails/proposalUpdate";
import VoteDetails from "../../components/proposal/voteDetails";

const ProposalDetails = () => {
    const [_, setEnableCreateProposal] = useState(false);
return (
    <FeedsLayout>
        <DetailsNav setEnableCreateProposal={setEnableCreateProposal}>
        <ProposalUpdate msgHeading="Change Voting Snapshot" message="The proposed changes in Voting Policy will affect the other proposals. Further updates might get rewritten if the current proposal won't get resolved before." />
        {AllActiveProposal.slice(0, 1).map((proposer) => (
        <div className="mb-16 py-3 cursor-pointer" key={proposer.id}>
          <div className="w-full">
            <p className="text-sm text-grey text-right my-1">
              Proposal ID: <span>{proposer.id}</span>
            </p>
            <div
              className="rounded-lg h-fit"
              style={{
                boxShadow:
                  "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px",
              }}
            >
              <div className="flex">
                <div className="w-14 bg-bg flex">
                  <div className="mx-auto mt-4">{CodeIcon}</div>
                </div>
                <div className="px-6 py-3 w-full">
                  <div className="flex justify-between w-full">
                    {/* title of the DAO and link to the DAO */}
                    <div>
                      <p className="text-sm text-grey text-left my-1">
                        Proposal Type: <span>{proposer.type}</span>
                      </p>
                      <div className="flex items-center mt-3">
                        <h3 className="font-gilroyBold text-gl">{proposer.type}</h3>
                        <ExternalLink url={proposer.wallet_addr} />
                      </div>
                    </div>
                    <p className="text-success font-gilroyMd">
                      Approved at:{" "}
                      <span className="text-grey">{proposer.appr_date}</span>
                    </p>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-grey">Proposer</p>
                    <p className="font-gilroyBold">{proposer.proposer}</p>
                  </div>
                  {/* Description */}
                  <div className="mt-4">
                    <p className="text-sm text-grey">Description</p>
                    <p className="w-4/5">
                      {proposer.desc}
                    </p>
                  </div>
                  
                  <div className="flex w-3/5 justify-between mt-14">
                    <div className="">
                        <p className="text-sm text-grey">Smart Contract Address</p>
                        <p className="font-gilroyBold">core.nkys.testnet</p>
                    </div>
                    <div className="">
                        <p className="text-sm text-grey">Method Name</p>
                        <p className="font-gilroyBold">claim_treasury_smartdao</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center my-8">

                    <div className="">
                            <p className="text-sm text-grey">Deposit</p>
                            <p className="font-gilroyBold">0 USD</p>
                        </div>
                    <div className="flex mt-6 items-center w-3/12 justify-between text-right">
                      <div className="flex items-center w-full mr-4">
                        <div className="flex items-center border h-9 w-9 rounded-full border-tertiary shadow-card bg-white hover:bg-light trans">
                          {LikeIcon}
                        </div>
                        <p className="ml-2">{proposer.likes}</p>
                      </div>

                      <div className="flex items-center w-full mr-4">
                        <div className="flex items-center border h-9 w-9 rounded-full border-tertiary shadow-card bg-white hover:bg-light trans">
                          {DislikeIcon}
                        </div>
                        <p className="ml-2">{proposer.dislikes}</p>
                      </div>

                      <div className="flex items-center w-full">
                        <div className="flex items-center border h-9 w-9 rounded-full border-tertiary shadow-card bg-white hover:bg-light trans">
                          {ChatIcon}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        ))}
        <VoteDetails />
    </DetailsNav>
    </FeedsLayout>
);
};
export default ProposalDetails;