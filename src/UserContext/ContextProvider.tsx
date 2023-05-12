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
  const { getLocalStorage, setLocalStorage, clearStorage } = useLocalStorage();

  const loginUser = () => {
    setLocalStorage({ key: 'isLoggedIn', value: true});
    setIsLoggedIn(true)
  };
  const logoutUser = () => {
    clearStorage()
    setIsLoggedIn(false);
  }

  useEffect(() => {
    setIsLoggedIn(getLocalStorage());
  }, []);

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
