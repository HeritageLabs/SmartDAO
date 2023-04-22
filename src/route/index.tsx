import React, { useEffect, useMemo, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { CREATE_DAO_URL, CREATE_DAO_URL_ADD_GROUPS, CREATE_DAO_URL_PROPOSAL, CREATE_DAO_URL_SOCIALS, DAOS, FEEDS, HOME_URL, PROPOSALS } from "../utils/constants/pages";
import AOS from "aos";
import { UserContext } from "../UserContext";

const Home = React.lazy(() => import("../pages/home"));
const Feeds = React.lazy(() => import("../pages/feeds"));
const Proposals = React.lazy(() => import("../pages/proposals"));
const Daos = React.lazy(() => import("../pages/dao"));
const CreateDAO = React.lazy(() => import("../pages/create-dao"));
const AddSocialInfo = React.lazy(() => import("../pages/create-dao/create-socials"));
const AddGroups = React.lazy(() => import("../pages/create-dao/add-groups"));
const ProposalCreation = React.lazy(() => import("../pages/create-dao/proposal-creation"));

const WebRoute = () => {
  const [value, setValue] = useState(false);
  const providerValue = useMemo(() => ({value, setValue}), [value, setValue]);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <UserContext.Provider value={providerValue}>
      <Routes>
        <Route index path={HOME_URL} element={<Home />} />
        <Route path={FEEDS} element={<Feeds />} />
        <Route path={PROPOSALS} element={<Proposals />} />
        <Route path={DAOS} element={<Daos />} />
        <Route path={CREATE_DAO_URL} element={<CreateDAO />} />
        <Route path={CREATE_DAO_URL_SOCIALS} element={<AddSocialInfo />} />
        <Route path={CREATE_DAO_URL_ADD_GROUPS} element={<AddGroups />} />
        <Route path={CREATE_DAO_URL_PROPOSAL} element={<ProposalCreation />} />
      </Routes>
    </UserContext.Provider>
  );
};

export default WebRoute;
