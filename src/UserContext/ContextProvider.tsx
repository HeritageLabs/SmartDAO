/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode, useEffect, useMemo, useState } from "react";
import { UserContext } from ".";
import useLocalStorage from "../hooks/useLocalStorage";

interface IContextProvider {
  children: ReactNode;
}

const ContextProvider = ({ children }: IContextProvider) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { getLocalStorage, setLocalStorage, removeItem } = useLocalStorage();

  const loginUser = () => {
    setLocalStorage('isLoggedIn', true);
    setIsLoggedIn(true)
  };
  const logoutUser = () => {
    removeItem('isLoggedIn');
    setIsLoggedIn(false);
  }

  useEffect(() => {
    setIsLoggedIn(getLocalStorage('isLoggedIn'));
  }, [getLocalStorage('isLoggedIn')]);

    const providerValue = useMemo(
      () => ({ isLoggedIn, loginUser, showModal, setShowModal, logoutUser }),
      [isLoggedIn, loginUser, showModal, setShowModal, logoutUser]
    );

  return (
    <UserContext.Provider value={providerValue}>
      {children}
    </UserContext.Provider>
  );
};

export default ContextProvider;
