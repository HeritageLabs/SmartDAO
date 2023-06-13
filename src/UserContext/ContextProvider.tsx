/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode, useEffect, useMemo, useState } from "react";
import { UserContext } from ".";
import { login, smartdaoAddress, aeSdk as client } from "../utils/contract/smartdao.js";
import smartdaoACI from "../utils/contract/smartdao.json";
import daoACI from "../utils/contract/dao.json";
import { IAccount, IDAO, IProposal } from "../types";
import { createUser, logoutFirebase, signIn } from "../firebase";

interface IContextProvider {
  children: ReactNode;
}

const ContextProvider = ({ children }: IContextProvider) => {
  const [aeSdk, setAeSdk]: any = useState(client);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [account, setAccount] = useState<IAccount>({ address: "", balance: 0 });
  const [showModal, setShowModal] = useState(false);
  const [amountDonated, setAmountDonated] = useState<string | number>(0);
  const [allDaos, setAllDaos] = useState<any[]>();
  const [allProposals, setAllProposals] = useState<any[]>();
  const [proposals, setProposals] = useState<any[]>();
  const [daos, setDaos] = useState<any[]>();

  useEffect(() => {
    getAllDaos();
    getAllProposals();
  }, []);

  const filterProposals = (active: boolean, executed: boolean) => {
    const isActive = (proposal: any) => proposal.endTime > Date.now();

    const filteredProposals = proposals?.filter((proposal) => isActive(proposal) == active && proposal.isExecuted == executed)
    console.log({ filterProposals })
    setProposals(filteredProposals);

  }

  const handleSearchDaos = (value: string) => {
    if (value) {
      value = value.toLowerCase();
      const filteredDaos = allDaos?.filter((dao: any) =>
        dao?.name?.toLowerCase().includes(value)
      );
      setDaos(filteredDaos);
      console.log({ value })
      console.log({ filteredDaos })
    } else {
      setDaos(allDaos);
    }
  };

  const handleSearchProposals = (value: string) => {
    if (value) {
      value = value.toLowerCase();
      const filteredProposals = allProposals?.filter(
        (proposal: any) =>
          proposal?.dao?.name
            ?.toLowerCase()
            .includes(value) ||
          proposal?.description?.toLowerCase().includes(value) ||
          proposal?.proposer
            ?.toLowerCase()
            .includes(value) ||
          proposal?.target?.toLowerCase().includes(value) ||
          proposal?.proposalType?.toLowerCase().includes(value)
      );
      setProposals(filteredProposals);
      console.log({ value })
      console.log({ filteredProposals })
    } else {
      setProposals(allProposals)
    }
  };

  const getAmountDonated = (amount: string | number) => {
    setAmountDonated(amount);
  };

  const getAllDaos = async () => {
    getDAOs().then((res: any) => {
      for (let i = 0; i < res.length; i++) {
        let dao = res[i];
        for (let key in dao) {
          if (typeof dao[key] == "bigint") {
            dao[key] = Number(dao[key]);
          }
        }
      }
      setAllDaos(res);
      setDaos(res);
    });
  };

  const getAllProposals = async () => {
    try {
      const daos = await getDAOs();
      const propps = [];
      for (let i = 0; i < daos.length; i++) {
        let daoProposals = await getProposals(daos[i].contractAddress);
        daoProposals.map((proposal: any) => {
          for (let key in proposal) {
            if (typeof proposal[key] == "bigint") {
              proposal[key] = Number(proposal[key]);
            }
          }
          proposal.dao = daos[i];
          proposal.showComment = false;
        });
        propps.push(...daoProposals);
      }
      propps.sort((proposal1, proposal2) =>
        Number(proposal2.endTime - proposal1.endTime)
      );
      setAllProposals(propps);
      setProposals(propps);
    } catch (error) {
      console.log({ error });
    }
  };

  const loginUser = async () => {
    const client = await login();
    setAeSdk(client);
    setIsLoggedIn(true);
    const address = Object.keys(client!._accounts!.current)[0];
    const balance = (await client!.getBalance(`ak_${address.slice(3)}`));
    setAccount({
      address,
      balance: parseFloat(balance) / 1e18
    });
    await createUser(address);
    signIn(address)
    setIsLoggedIn(true);
    setShowModal(false);
  };

  const logoutUser = async () => {
    await aeSdk.disconnectWallet();
    setIsLoggedIn(false);
    setAccount({ address: "", balance: 0 });
    logoutFirebase()
    window.location.reload();
  }

  const createDAO = async (dao: IDAO) => {
    const contract = await aeSdk.initializeContract({ aci: smartdaoACI, address: smartdaoAddress });
    const res = await contract.createDAO(dao.name.toLowerCase(), dao.description, dao.tokenSymbol, dao.image, dao.socials, dao.initialMembers, dao.startingBalance * 1e18, { amount: dao.startingBalance * 1e18 });
  }

  async function getDAO(id: string) {
    const contract = await aeSdk.initializeContract({ aci: smartdaoACI, address: smartdaoAddress })
    const res = await contract.getDAO(id);
    const dao = res.decodedResult;
    return dao;
  }

  async function getDAOs() {
    const contract = await aeSdk.initializeContract({ aci: smartdaoACI, address: smartdaoAddress })
    const res = await contract.getDAOs();
    const daos = res.decodedResult;
    return daos;
  }

  async function createProposal(DAOAddress: string, proposal: IProposal) {
    const contract = await aeSdk.initializeContract({ aci: daoACI, address: DAOAddress });
    const res = await contract.createProposal(proposal.proposalType, proposal.description, proposal.value, proposal.target);
  }

  async function voteForProposal(DAOAddress: string, proposalId: number) {
    const contract = await aeSdk.initializeContract({ aci: daoACI, address: DAOAddress });
    const res = await contract.voteFor(proposalId);
  }

  async function voteAgainstProposal(DAOAddress: string, proposalId: number) {
    const contract = await aeSdk.initializeContract({ aci: daoACI, address: DAOAddress });
    const res = await contract.voteAgainst(proposalId);
  }

  async function executeProposal(DAOAddress: string, proposalId: number) {
    const contract = await aeSdk.initializeContract({ aci: daoACI, address: DAOAddress });
    const res = await contract.executeProposal(proposalId);
  }

  async function getProposal(DAOAddress: string, proposalId: number) {
    const contract = await aeSdk.initializeContract({ aci: daoACI, address: DAOAddress })
    const res = await contract.getProposal(proposalId);
    const proposal = res.decodedResult;
    return proposal;
  }

  async function getProposals(DAOAddress: string) {
    const contract = await aeSdk.initializeContract({ aci: daoACI, address: DAOAddress })
    const res = await contract.getProposals();
    const proposals = res.decodedResult;
    return proposals;
  }

  async function getActiveProposals(DAOAddress: string) {
    const contract = await aeSdk.initializeContract({ aci: daoACI, address: DAOAddress })
    const res = await contract.getActiveProposals();
    const proposals = res.decodedResult;
    return proposals;
  }

  async function donate(DAOAddress: string, amount: number) {
    const contract = await aeSdk.initializeContract({ aci: daoACI, address: DAOAddress })
    const res = await contract.donate({ amount });
  }



  const providerValue = useMemo(
    () => ({ isLoggedIn, loginUser, showModal, setShowModal, logoutUser, account, createDAO, getDAOs, aeSdk, getDAO, createProposal, getAmountDonated, voteForProposal, voteAgainstProposal, executeProposal, getProposal, getProposals, getActiveProposals, handleSearchDaos, handleSearchProposals, donate, amountDonated, daos, allDaos, getAllDaos, proposals, allProposals, getAllProposals, filterProposals }),
    [isLoggedIn, loginUser, showModal, setShowModal, logoutUser, account, createDAO, getDAOs, aeSdk, getDAO, createProposal, voteForProposal, voteAgainstProposal, executeProposal, getProposal, getProposals, getAmountDonated, getActiveProposals, handleSearchDaos, handleSearchProposals, donate, amountDonated, daos, allDaos, getAllDaos, proposals, allProposals, getAllProposals, filterProposals]
  );

  return (
    <UserContext.Provider value={providerValue}>
      {children}
    </UserContext.Provider>
  );
};

export default ContextProvider;
