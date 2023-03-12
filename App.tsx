import React from "react";
import "./environments";

import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import WhiteLabelConfig from "./modules/WhiteLabelConfig";
import { Hero, Logo } from "@assets";
import { Button } from "@components";

export default function App() {
  return (
    <ImageBackground style={styles.hero} source={Hero}>
      <View style={styles.container}>
        <SafeAreaView style={styles.wrapper}>
          <Logo width={250} height={200} />
          <Text style={styles.title}>
            Welcome to {WhiteLabelConfig.APP_NAME}, your go-to app for the
            latest news and updates from around the world.
          </Text>
          <Button />
          <StatusBar style="light" translucent />
        </SafeAreaView>
      </View>
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
    backgroundColor: WhiteLabelConfig.THEME.brightness,
  },
  wrapper: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
  },
  title: {
    width: "75%",
    fontSize: 24,
    color: WhiteLabelConfig.THEME.heroTitle,
  },
});
