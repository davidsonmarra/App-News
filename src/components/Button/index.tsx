import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { WhiteLabelConfig } from "@modules";

interface Props extends TouchableOpacityProps {
  text?: string;
  alternative?: boolean;
}

export const Button = ({
  onPress,
  text = "Let's Start",
  alternative,
}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles(alternative).container}>
      <Text style={styles(alternative).text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = (isAlternative = false) =>
  StyleSheet.create({
    container: {
      backgroundColor: isAlternative
        ? WhiteLabelConfig.THEME.secondary
        : WhiteLabelConfig.THEME.primary,
      paddingVertical: 16,
      paddingHorizontal: 24,
      borderRadius: 8,
    },
    text: {
      color: isAlternative
        ? WhiteLabelConfig.THEME.primary
        : WhiteLabelConfig.THEME.title,
      fontSize: 16,
      fontWeight: "bold",
    },
  });
