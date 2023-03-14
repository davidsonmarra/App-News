import React from "react";
import "./environments";

import { store } from "whitelabelnews-state-manager";
import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "@routes";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </Provider>
  );
}
