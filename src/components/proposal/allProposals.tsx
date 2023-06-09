/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../UserContext";
import Logo from "../../assets/icons/logo-icon.svg";
import { IContextType } from "../../types";
import PageLoader from "../PageLoader";
import { useToastify } from "../../hooks/useToastify";
import CustomButton from "../common/button";
import { ChatIcon, CodeIcon, DislikeIcon, LikeIcon, Loader } from "../../assets/svgs";
import CommentBox from "./commentBox";

const AllProposals = ({ dao, filters }: { dao: any, filters: { active: boolean | undefined, executed: boolean | undefined } }) => {
  const [filteredProposals, setFilteredProposals] = useState<any[]>();
  const { alertToast } = useToastify();
  const [isLoading, setIsLoading] = useState(false);
  const [isVotingAganstLoading, setIsVotingAgainstLoading] = useState(false);
  const [isExecuting, setIsExecuting] = useState(false);
  const [messages, setMessages] = useState([]);
  const {
    proposals,
    getAllProposals,
    voteForProposal,
    voteAgainstProposal,
    executeProposal,
  } = useContext(UserContext) as IContextType;

  const handleChat = (index: number) => {
    const prevProposal = [...filteredProposals!];
    if (prevProposal[index].showComment === true) {
      prevProposal[index].showComment = false;
      setFilteredProposals(prevProposal)
    } else {
      prevProposal[index].showComment = true;
      setFilteredProposals(prevProposal);
    }
  }

  useEffect(() => {
    console.log(proposals)
    // Filter proposal
    const isActive = (proposal: any) => proposal.endTime > Date.now();
    let fProposals = proposals;

    if (dao?.name) {
      fProposals = fProposals?.filter((proposal) => proposal.dao?.name == dao?.name);
    }

    if (filters?.active != undefined) {
      fProposals = fProposals?.filter((proposal) => isActive(proposal) == filters.active)
    }
    if (filters?.executed != undefined) {
      fProposals = fProposals?.filter((proposal) => proposal.isExecuted == filters.executed)
    }

    setFilteredProposals(fProposals);
  }, [proposals, filters]);

  const calculateQuorum = (
    votesFor: number,
    votesAgainst: number,
    totalMembers: number
  ) => {
    return ((votesFor + votesAgainst) * 100) / totalMembers;
  };

  const handleVoteForProposal = async (address: any, id: any) => {
    try {
      setIsLoading(true);
      await voteForProposal(address, id);
      setIsLoading(false);
      getAllProposals();
      alertToast("success", "Successfully voted for proposal!");
    } catch (error: any) {
      setIsLoading(false);
      alertToast("error", error.message);
    }
  };

  const handleExecuteProposal = async (address: any, id: any) => {
    try {
      setIsExecuting(true);
      await executeProposal(address, id);
      setIsExecuting(false);
      getAllProposals();
      alertToast("success", "Proposal successfully executed!");
    } catch (error: any) {
      setIsExecuting(false);

      alertToast("error", error.message);
    }
  };

  const handleVoteAgainstProposal = async (address: any, id: any) => {
    try {
      setIsVotingAgainstLoading(true);
      await voteAgainstProposal(address, id);
      setIsVotingAgainstLoading(false);
      getAllProposals();
      alertToast("success", "Successfully voted against proposal!");
    } catch (error: any) {
      setIsVotingAgainstLoading(false);
      alertToast("error", error.message);
    }
  };

  function hasTarget(proposalType: string) {
    if (proposalType == "add" || proposalType == "remove" || "transfer") {
      return true;
    }
    return false;
  }

  function hasValue(proposalType: string) {
    if (
      proposalType == "quorum" ||
      proposalType == "voteTime" ||
      proposalType == "transfer"
    ) {
      return true;
    }
    return false;
  }


  return (
    <div>
      {filteredProposals ? (
        <div className="w-full px-14 relative">
          {filteredProposals.length > 0 ?
            filteredProposals?.map((proposal: any, index: number) => {
              return (
                <div className="mb-16 py-3" key={proposal.id}>
                  <div className="flex items-center">
                    <div>
                      <div className="border-grey rounded border p-1 w-12 h-12 cursor-pointer">
                        <img
                          src={Logo}
                          alt="logo"
                          className="mx-auto mt-1 w-6"
                        />
                      </div>
                    </div>
                    <div className="ml-2">
                      <p className="text-sm text-grey">DAO name</p>
                      <p className="font-gilroyBold capitalize">
                        {proposal.dao.name}
                      </p>
                    </div>
                  </div>

                  <div className="w-full">
                    <p className="text-sm text-grey text-right my-1">
                      Proposal ID: <span>{proposal.id}</span>
                    </p>
                    <div className="rounded-lg h-fit shadow-card hover:shadow-normal">
                      <div className="flex z-10">
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
                                <h3 className="font-gilroyBold text-gl">
                                  {proposal.proposalType[0].toUpperCase() +
                                    proposal.proposalType.slice(1)}
                                </h3>
                                {/* <ExternalLink url={window.location.origin + "daos/" + proposer.dao} /> */}
                              </div>
                            </div>
                            <p
                              className={`${proposal.votesFor > proposal.votesAgainst
                                ? "text-success"
                                : "text-red"
                                } font-gilroyMd`}
                            >
                              {proposal.endTime > Date.now()
                                ? "Ending: "
                                : "Ended at: "}{" "}
                              {new Date(proposal.endTime).toLocaleString("en-GB", {
                                dateStyle: "short",
                                timeStyle: "short",
                              })}
                              <span className="text-grey">
                                {proposal.appr_date}
                              </span>
                            </p>
                          </div>
                          <div className="mt-4">
                            <p className="text-sm text-grey">Proposal</p>
                            <p className="font-gilroyBold">
                              {proposal.proposer}
                            </p>
                          </div>
                          {/* Description */}
                          <div className="mt-4">
                            <p className="text-sm text-grey">Description</p>
                            <p className="w-4/5">{proposal.description}</p>
                          </div>
                          {hasTarget(proposal.proposalType) && (
                            <div className="mt-4">
                              <p className="text-sm text-grey">Target</p>
                              <p className="w-4/5">{proposal.target}</p>
                            </div>
                          )}

                          {hasValue(proposal.proposalType) && (
                            <div className="mt-4">
                              <p className="text-sm text-grey">Value</p>
                              <p className="w-4/5">
                                {proposal.proposalType == "transfer"
                                  ? (proposal.value / 1e18).toFixed(
                                    2
                                  )
                                  : proposal.value}
                              </p>
                            </div>
                          )}

                          <div className="flex justify-between">
                            <p className="mt-6">
                              {`Total votes: ${calculateQuorum(
                                proposal.votesFor,
                                proposal.votesAgainst,
                                proposal.dao.members.length
                              ).toFixed(2)}% ${calculateQuorum(
                                proposal.votesFor,
                                proposal.votesAgainst,
                                proposal.dao.members.length
                              ) > proposal.dao.quorum
                                ? "Quorum reached!"
                                : "Qurom not reached!"
                                }`}
                            </p>
                            <div className="flex mt-8 items-center max-w-5/12 justify-between text-right">
                              <div className="mr-8 flex items-center">
                              </div>
                              {
                                <div className="flex items-center w-full mr-4">
                                  <div
                                    className="flex items-center border h-9 w-9 rounded-full border-tertiary shadow-card bg-white hover:bg-light trans cursor-pointer"
                                    onClick={() =>
                                      handleVoteForProposal(
                                        proposal.dao.contractAddress,
                                        proposal.id
                                      )
                                    }
                                  >
                                    {isLoading ? Loader : LikeIcon}
                                  </div>
                                  <p className="ml-2">
                                    {proposal.votesFor || 0}
                                  </p>
                                </div>
                              }

                              {
                                <div className="flex items-center w-full mr-4">
                                  <div
                                    className="flex items-center border h-9 w-9 rounded-full border-tertiary shadow-card bg-white hover:bg-light trans cursor-pointer"
                                    onClick={() =>
                                      handleVoteAgainstProposal(
                                        proposal.dao.contractAddress,
                                        proposal.id
                                      )
                                    }
                                  >
                                    {isVotingAganstLoading
                                      ? Loader
                                      : DislikeIcon}
                                  </div>
                                  <p className="ml-2">
                                    {proposal.votesAgainst || 0}
                                  </p>
                                </div>
                              }
                              <div className="flex items-center border h-9 px-2 w-9 rounded-full border-tertiary shadow-card bg-white hover:bg-light trans cursor-pointer" onClick={() => handleChat(index)}>
                                {ChatIcon}
                              </div>

                              {/* {!proposal.isExecuted && ( */}
                              <div className={`flex items-center ml-14 w-full ${!proposal.isExecuted ? 'invisible' : 'visible'}`}>
                                <CustomButton
                                  handleClick={() =>
                                    handleExecuteProposal(
                                      proposal.dao.contractAddress,
                                      proposal.id
                                    )
                                  }
                                  isLoading={isExecuting}
                                >
                                  Exceute
                                </CustomButton>

                              </div >

                              {/* )} */}
                            </div >
                          </div >
                        </div >
                      </div >
                    </div >
                    <CommentBox showComment={proposal.showComment} messages={messages} setMessages={setMessages} proposalId={`${proposal.dao.name}-${proposal.id}`} />
                  </div >
                </div >
              );
            }) : <p> No proposals!</p>}
        </div >
      ) : (
        <PageLoader />
      )}
    </div >
  )
}

export default AllProposals;
