import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { FEEDS, HOME_URL } from '../utils/constants/pages';
import AOS from 'aos';

const Home = React.lazy(() => import('../pages/home'));
const Feeds = React.lazy(() => import('../pages/feeds'));

const WebRoute = () => {
  useEffect(() => {
    AOS.init();
  }, []);
return (
  <Routes>
    <Route index path={HOME_URL} element={<Home />} />
    <Route index path={FEEDS} element={<Feeds />} />
  </Routes>
);
};

export default WebRoute;
