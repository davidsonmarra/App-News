import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { WhiteLabelConfig } from "@modules";

export const Button = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>Let's Start</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: WhiteLabelConfig.THEME.primary,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  text: {
    color: WhiteLabelConfig.THEME.title,
    fontSize: 16,
    fontWeight: "bold",
  },
});
