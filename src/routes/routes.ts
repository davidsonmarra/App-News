import React from "react";
import { RootStackParamList } from ".";
import { Home, News } from "@pages";

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
  // {
  //   screenName: 'SearchResults',
  //   component: SearchResults,
  //   options: {
  //     gestureEnabled: false
  //   }
  // },
  // {
  //   screenName: 'HeroDetails',
  //   component: HeroDetails,
  //   options: {
  //     gestureEnabled: true
  //   }
  // }
];
