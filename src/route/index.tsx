import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { DAOS, FEEDS, HOME_URL, PROPOSALS } from '../utils/constants/pages';
import AOS from 'aos';

const Home = React.lazy(() => import('../pages/home'));
const Feeds = React.lazy(() => import('../pages/feeds'));
const Proposals = React.lazy(() => import('../pages/proposals'));
const Daos = React.lazy(() => import('../pages/dao'));

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
  </Routes>
);
};

export default WebRoute;
