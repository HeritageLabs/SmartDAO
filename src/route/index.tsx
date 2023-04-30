/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import {
  CREATE_DAO_URL,
  CREATE_DAO_URL_ADD_GROUPS,
  CREATE_DAO_URL_CHECKOUT,
  CREATE_DAO_URL_PROPOSAL,
  CREATE_DAO_URL_SOCIALS,
  DAOS,
  FEEDS,
  HOME_URL,
  PROPOSALS,
} from "../utils/constants/pages";
import AOS from "aos";
import Private from "./private";

const Home = React.lazy(() => import("../pages/home"));
const Feeds = React.lazy(() => import("../pages/feeds"));
const Proposals = React.lazy(() => import("../pages/proposals/index"));
const Daos = React.lazy(() => import("../pages/dao/index"));
const CreateDAO = React.lazy(() => import("../pages/create-dao"));
const AddSocialInfo = React.lazy(
  () => import("../pages/create-dao/create-socials")
);
const AddGroups = React.lazy(() => import("../pages/create-dao/add-groups"));
const ProposalCreation = React.lazy(
  () => import("../pages/create-dao/proposal-creation")
);
const CheckoutPage = React.lazy(() => import("../pages/create-dao/checkout"));
const DaoDetails = React.lazy(() => import("../pages/dao/daoDetails/details"));
const ProposalDetails = React.lazy(() => import("../pages/proposals/details"));

const WebRoute = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
      <Routes>
        <Route index path={HOME_URL} element={<Home />} />
        <Route path={FEEDS} element={<Feeds />} />
        <Route path={PROPOSALS} element={<Proposals />} />
        <Route path={DAOS} element={<Daos />} />
        <Route
          path={CREATE_DAO_URL}
          element={
            <Private>
              <CreateDAO />
            </Private>
          }
        />
        <Route path={CREATE_DAO_URL_SOCIALS} element={<Private><AddSocialInfo /></Private>} />
        <Route path={CREATE_DAO_URL_ADD_GROUPS} element={<Private><AddGroups /></Private>} />
        <Route path={CREATE_DAO_URL_PROPOSAL} element={<Private><ProposalCreation /></Private>} />
        <Route path={CREATE_DAO_URL_CHECKOUT} element={<Private><CheckoutPage /></Private>} />
        <Route path={`${DAOS}/:daoId`} element={<Private><DaoDetails /></Private>} />
        <Route path={`${PROPOSALS}/:proposalId`} element={<Private><ProposalDetails /></Private>} />
      </Routes>
  );
};

export default WebRoute;
