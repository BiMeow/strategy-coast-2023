/* eslint-disable import/extensions */
import React from "react";

import Compose from "@/components/context/compose/Compose";
import MainProvider from "@/components/context/MainProvider";
import StorageProvider from "@/components/context/StorageProvider";

// import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
// import { persistor, store } from "@/modules/redux/store";

const Providers = (props: any) => {
  return (
    <Compose components={[StorageProvider, MainProvider]} {...props}></Compose>
  );
};

export default Providers;
