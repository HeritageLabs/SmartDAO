import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HOME_URL } from '../utils/constants/pages';
import AOS from 'aos';

const Home = React.lazy(() => import('../pages/home'));

const WebRoute = () => {
  useEffect(() => {
    AOS.init();
  }, []);
return (
  <Routes>
    <Route index path={HOME_URL} element={<Home />} />
  </Routes>
);
};

export default WebRoute;
