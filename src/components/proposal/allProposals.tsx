import { useContext } from "react";
import { UserContext } from "../../UserContext";
import Logo from "../../assets/icons/logo-icon.svg";
import {
  ChatIcon,
  CodeIcon,
  DislikeIcon,
  LikeIcon,
} from "../../assets/svgs";
import { IContextType } from "../../types";
import { PROPOSALS } from "../../utils/constants/pages";
import { ExternalLink } from "../common/ExternalLink.tsx";
import { AllActiveProposal } from "./data";
import { useNavigate } from "react-router-dom";

const AllProposals = () => {
  const navigate = useNavigate();
  const { isLoggedIn, loginUser } = useContext(UserContext) as IContextType;

  const handleClick = (id: number) => {
    if (!isLoggedIn) {
      loginUser();
      navigate(`${PROPOSALS}/${id}`);
    }
    navigate(`${PROPOSALS}/${id}`);
  }

return (
  <div className="w-full px-14">
    {AllActiveProposal.map((proposer) => (
        <div className="mb-16 py-3 cursor-pointer" key={proposer.id} onClick={() => handleClick(proposer.id)}>
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
              className="rounded-lg h-fit shadow-card hover:shadow-normal"
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
  </div>
);
    };

export default AllProposals;
