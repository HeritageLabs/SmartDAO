import React, { useEffect, useMemo, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { CREATE_DAO_URL, DAOS, FEEDS, HOME_URL, PROPOSALS } from "../utils/constants/pages";
import AOS from "aos";
import { UserContext } from "../UserContext";

const Home = React.lazy(() => import("../pages/home"));
const Feeds = React.lazy(() => import("../pages/feeds"));
const Proposals = React.lazy(() => import("../pages/proposals"));
const Daos = React.lazy(() => import("../pages/dao"));
const CreateDAO = React.lazy(() => import("../pages/create-dao"));

const WebRoute = () => {
  const [value, setValue] = useState(false);
  const providerValue = useMemo(() => ({value, setValue}), [value, setValue]);
  
  console.log(value);
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
      </Routes>
    </UserContext.Provider>
  );
};

export default WebRoute;
