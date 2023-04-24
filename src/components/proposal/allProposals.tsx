import Logo from "../../assets/icons/logo-icon.svg";
import {
  CodeIcon,
  DislikeIcon,
  LikeIcon,
} from "../../assets/svgs";
import { ExternalLink } from "../common/ExternalLink.tsx";
import { AllActiveProposal } from "./data";

const AllProposals = () => (
  <div className="w-full px-14">
    {AllActiveProposal.map((proposer) => (
      <div className="mb-16 py-3 cursor-pointer" key={proposer.id}>
        <div className="flex items-center">
          <div>
            <div className="border-grey rounded border p-1 w-12 h-12 cursor-pointer">
              <img src={Logo} alt="logo" className="mx-auto mt-1 w-6" />
            </div>
          </div>
          <div className="ml-2">
            <p className="text-sm text-grey">DAO name</p>
            <p className="font-gilroyBold">{proposer.name}</p>
          </div>
        </div>

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

export default AllProposals;
