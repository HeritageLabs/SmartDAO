import { ReactElement, useContext } from "react";
import { Navigate } from "react-router-dom";
import { FEEDS } from "../utils/constants/pages";
import useLocalStorage from "../hooks/useLocalStorage";
import { UserContext } from "../UserContext";
import { IContextType } from "../types";
import { useToastify } from "../hooks/useToastify";

interface IPrivate {
  children: ReactElement;
}

const Private = ({ children }: IPrivate) => {
  const { isLoggedIn } = useContext(UserContext) as IContextType;
  const { alertToast } = useToastify();

  if (!isLoggedIn) {
    alertToast("danger", "You're not connected")
    return <Navigate to={FEEDS} replace />;
  }
  return children;
};

export default Private;
