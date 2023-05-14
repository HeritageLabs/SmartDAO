import { useContext, useEffect, useState } from "react";
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
import useLocalStorage from "../../hooks/useLocalStorage";
import PageLoader from "../PageLoader";
import { useToastify } from "../../hooks/useToastify";
import CustomButton from "../common/button";

const AllProposals = ({ dao }: { dao: any }) => {
  const [proposals, setProposals] = useState<any>();
  const { alertToast } = useToastify();
  const navigate = useNavigate();
  const { loginUser, aeSdk, getDAOs, getProposals, voteForProposal, voteAgainstProposal, executeProposal } = useContext(UserContext) as IContextType;
  const { getLocalStorage } = useLocalStorage();

  const handleClick = (id: number) => {
    // if (!getLocalStorage()) {
    //   loginUser();
    //   navigate(`${PROPOSALS}/${id}`);
    // }
    // navigate(`${PROPOSALS}/${id}`);
  }

  const getAllProposals = async () => {
    try {
      const daos = await getDAOs();
      const propps = [];
      for (let i = 0; i < daos.length; i++) {
        let daoProposals = await getProposals(daos[i].contractAddress)
        daoProposals.map((p: any) => {
          p.dao = daos[i];
        })
        propps.push(...daoProposals);
        console.log(Number(propps[0].endTime) > Date.now())
        console.log(Date.now())
      }
      setProposals(propps);
    } catch (error) {
      console.log({ error })
    }
  };

  const handleVoteForProposal = async (address: any, id: any) => {
    console.log({ aeSdk });
    try {
      await voteForProposal(address, id)
    } catch (error: any) {
      console.log({ error })
      window.alert(error.message);
      alertToast('error', { error });
      window.location.reload();
    }
  }

  const handleExecuteProposal = async (address: any, id: any) => {
    console.log({ aeSdk });
    try {
      await executeProposal(address, id);
    } catch (error: any) {
      console.log({ error })
      window.alert(error.message);
      alertToast('error', { error });
      window.location.reload()
    }
  }

  const handleVoteAgainstProposal = async (address: any, id: any) => {
    console.log({ aeSdk });
    try {
      await voteAgainstProposal(address, id)
    } catch (error: any) {
      console.log({ error })
      window.alert(error.message);
      alertToast('error', { error });
      window.location.reload()
    }
  }

  function hasTarget(proposalType: string) {
    if (proposalType == "add" || proposalType == "remove" || "transfer") {
      return true;
    }
    return false;
  }

  function hasValue(proposalType: string) {
    if (proposalType == "quorum" || proposalType == "voteTime" || proposalType == "transfer") {
      return true;
    }
    return false;
  }


  useEffect(() => {
    getAllProposals();
  }, [aeSdk])

  return (
    <div>
      {proposals ? (
        <div className="w-full px-14">
          {proposals && proposals.map((proposal: any) => (
            // <div className="mb-16 py-3 cursor-pointer" key={Number(proposer.id)} onClick={() => handleClick(Number(proposer.id))}>
            <div className="mb-16 py-3" key={Number(proposal.id)}>
              <div className="flex items-center">
                <div>
                  <div className="border-grey rounded border p-1 w-12 h-12 cursor-pointer">
                    <img src={Logo} alt="logo" className="mx-auto mt-1 w-6" />
                  </div>
                </div>
                <div className="ml-2">
                  <p className="text-sm text-grey">DAO name</p>
                  <p className="font-gilroyBold">{proposal.dao.name}</p>
                </div>
              </div>

              <div className="w-full">
                <p className="text-sm text-grey text-right my-1">
                  Proposal ID: <span>{Number(proposal.id)}</span>
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
                            Proposal Type: <span>{proposal.type}</span>
                          </p>
                          <div className="flex items-center mt-3">
                            <h3 className="font-gilroyBold text-gl">{proposal.proposalType[0].toUpperCase() + proposal.proposalType.slice(1)}</h3>
                            {/* <ExternalLink url={window.location.origin + "daos/" + proposer.dao} /> */}
                          </div>
                        </div>
                        <p className="text-success font-gilroyMd">
                          {Number(proposal.endTime) > Date.now() ? "Ending: " : "Ended at: "} {new Date(Number(proposal.endTime)).toLocaleString("en-GB", { dateStyle: "short", timeStyle: "short" })}
                          <span className="text-grey">{proposal.appr_date}</span>
                        </p>
                      </div>
                      <div className="mt-4">
                        <p className="text-sm text-grey">Proposal</p>
                        <p className="font-gilroyBold">{proposal.proposer}</p>
                      </div>
                      {/* Description */}
                      <div className="mt-4">
                        <p className="text-sm text-grey">Description</p>
                        <p className="w-4/5">
                          {proposal.description}
                        </p>
                      </div>
                      {hasTarget(proposal.proposalType) && <div className="mt-4">
                        <p className="text-sm text-grey">Target</p>
                        <p className="w-4/5">
                          {proposal.target}
                        </p>
                      </div>}

                      {hasValue(proposal.proposalType) && <div className="mt-4">
                        <p className="text-sm text-grey">Value</p>
                        <p className="w-4/5">
                          {proposal.proposalType == "transfer" ? (Number(proposal.value) / 1e18).toFixed(2) : Number(proposal.value)}
                        </p>
                      </div>}

                      <div className="flex justify-end">
                        <div className="flex mt-6 items-center w-4/12 justify-between text-right">
                          {<div className="flex items-center w-full mr-4">
                            <div className="flex items-center border h-9 w-9 rounded-full border-tertiary shadow-card bg-white hover:bg-light trans cursor-pointer" onClick={() => handleVoteForProposal(proposal.dao.contractAddress, Number(proposal.id))}>
                              {LikeIcon}
                            </div>
                            <p className="ml-2">{Number(proposal.votesFor) || 0}</p>
                          </div>}

                          {<div className="flex items-center w-full mr-4">
                            <div className="flex items-center border h-9 w-9 rounded-full border-tertiary shadow-card bg-white hover:bg-light trans" onClick={() => handleVoteAgainstProposal(proposal.dao.contractAddress, Number(proposal.id))}>
                              {DislikeIcon}
                            </div>
                            <p className="ml-2">{Number(proposal.votesAgainst) || 0}</p>
                          </div>}

                          <div className="flex items-center w-full">
                            <CustomButton handleClick={() => handleExecuteProposal(proposal.dao.contractAddress, proposal.id)}>Exceute</CustomButton>
                            {/* <div className="flex items-center border h-9 w-9 rounded-full border-tertiary shadow-card bg-white hover:bg-light trans">
                               {ChatIcon}
                             </div> */}
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
      ) : (<PageLoader />)}
    </div>
  );
};

export default AllProposals;
