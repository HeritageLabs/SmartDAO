/* eslint-disable react-hooks/exhaustive-deps */
import React, { Suspense, useEffect } from "react";
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
  SELECT_TEMPLATE_URL,
  VIEW_MY_DAO,
} from "../utils/constants/pages";
import AOS from "aos";
import Private from "./private";
import PageLoader from "../components/PageLoader";
import MyDao from "../pages/myDaos";

const Home = React.lazy(() => import("../pages/home"));
const Feeds = React.lazy(() => import("../pages/feeds"));
const Proposals = React.lazy(() => import("../pages/proposals/index"));
const Daos = React.lazy(() => import("../pages/dao/index"));
const CreateDAOName = React.lazy(() => import("../pages/create-dao/dao-name"));
const DaoTemplate = React.lazy(() => import("../pages/create-dao"));
const AddSocialInfo = React.lazy(
  () => import("../pages/create-dao/create-socials")
);
const AddGroups = React.lazy(() => import("../pages/create-dao/add-groups"));
const ProposalCreation = React.lazy(
  () => import("../pages/create-dao/proposal-creation")
);
const CheckoutPage = React.lazy(() => import("../pages/create-dao/checkout"));
const DaoDetailsHome = React.lazy(() => import("../pages/dao/daoDetails/home"));

const WebRoute = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route index path={HOME_URL} element={<Home />} />
        <Route path={FEEDS} element={<Feeds />} />
        <Route path={PROPOSALS} element={<Proposals />} />
        <Route path={DAOS} element={<Daos />} />
        <Route
          path={CREATE_DAO_URL}
          element={
            <Private>
              <CreateDAOName />
            </Private>
          }
        />
        <Route path={CREATE_DAO_URL_SOCIALS} element={<Private><AddSocialInfo /></Private>} />
        <Route path={CREATE_DAO_URL_ADD_GROUPS} element={<Private><AddGroups /></Private>} />
        <Route path={SELECT_TEMPLATE_URL} element={<Private><DaoTemplate /></Private>} />
        <Route path={CREATE_DAO_URL_PROPOSAL} element={<Private><ProposalCreation /></Private>} />
        <Route path={CREATE_DAO_URL_CHECKOUT} element={<Private><CheckoutPage /></Private>} />
        <Route path={`${DAOS}/:daoId`} element={<DaoDetailsHome />} />
        <Route path={VIEW_MY_DAO} element={<Private><MyDao /></Private>} />
      </Routes>
    </Suspense>
  );
};

export default WebRoute;
