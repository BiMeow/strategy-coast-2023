import React, { FC, useContext, useEffect, useRef, useState } from "react";

import { useStorage } from "@/components/context/StorageProvider";
import Loading from "@/components/elements/Loading";

type MainContextType = {};

export const MainContext = React.createContext<any>(null);

interface Props {
  isPrivate?: boolean;
  children?: React.ReactNode;
}

const MainProvider: React.FC<Props> = ({ children, isPrivate }) => {
  const { setIsLoading } = useStorage();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <MainContext.Provider value={{}}>
      <Loading />
      {children}
    </MainContext.Provider>
  );
};

export default MainProvider;

export const useMain = () => {
  const context = useContext(MainContext);
  if (!context) {
    throw new Error("useMain has to be used within <MainContext.Provider>");
  }
  return context;
};
