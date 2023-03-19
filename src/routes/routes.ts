import React from "react";
import { RootStackParamList } from ".";
import { Home, NewDetails, News } from "@pages";

interface Props {
  screenName: keyof RootStackParamList;
  component: React.FC<any>;
  options?: {
    gestureEnabled: boolean;
  };
}

export const routes: Props[] = [
  {
    screenName: "Home",
    component: Home,
    options: {
      gestureEnabled: true,
    },
  },
  {
    screenName: "News",
    component: News,
    options: {
      gestureEnabled: false,
    },
  },
  {
    screenName: "NewDetails",
    component: NewDetails,
    options: {
      gestureEnabled: true,
    },
  },
];
