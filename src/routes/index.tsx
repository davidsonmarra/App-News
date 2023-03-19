import React from "react";
import { routes } from "./routes";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NewsDTO } from "@types";

export type RootStackParamList = {
  Home: undefined;
  News: undefined;
  NewDetails: { newData: NewsDTO };
};

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export function Routes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home"
    >
      {routes.map((routeObject) => (
        <Screen
          key={routeObject.screenName}
          name={routeObject.screenName}
          component={routeObject.component}
          options={routeObject.options}
        />
      ))}
    </Navigator>
  );
}
