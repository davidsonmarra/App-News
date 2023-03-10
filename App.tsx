import React from "react";
import "./environments";

import { StatusBar } from "expo-status-bar";
import { ImageBackground, SafeAreaView, StyleSheet, Text } from "react-native";
import WhiteLabelConfig from "./modules/WhiteLabelConfig";
import { Hero, Logo } from "@assets";

export default function App() {
  return (
    <ImageBackground style={styles.hero} source={Hero}>
      <SafeAreaView style={styles.container}>
        <Logo width={250} height={200} />
        <Text style={styles.text}>{WhiteLabelConfig.APP_NAME}</Text>
        <StatusBar style="light" translucent />
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  hero: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
  },
  text: {
    color: WhiteLabelConfig.THEME.primary,
  },
});
