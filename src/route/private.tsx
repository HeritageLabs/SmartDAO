import { ReactElement  } from "react";
import { Navigate } from "react-router-dom";
import { FEEDS } from "../utils/constants/pages";
import useLocalStorage from "../hooks/useLocalStorage";

interface IPrivate {
  children: ReactElement;
}

const Private = ({ children }: IPrivate) => {
  const { getLocalStorage } = useLocalStorage();
  const isLoggedIn = getLocalStorage('isLoggedIn');

  if (!isLoggedIn) {
    return <Navigate to={FEEDS} replace />;
  }
  return children;
};

export default Private;
