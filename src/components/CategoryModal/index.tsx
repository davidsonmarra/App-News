import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { WhiteLabelConfig } from "@modules";
import { EN, PT } from "@assets";
import { Button } from "../Button";
import { SafeAreaView } from "react-native-safe-area-context";

interface Props {
  language: string;
  setLanguage: (value: string) => void;
  onSubmit: () => void;
}

export const CategoryModal = ({ language, setLanguage, onSubmit }: Props) => {
  return (
    <SafeAreaView edges={["bottom"]} style={styles().container}>
      <Text style={styles().title}>Países</Text>
      <View style={styles().rowCategory}>
        <TouchableOpacity
          onPress={() => setLanguage("en")}
          style={styles(language === "en").imageWrapper}
        >
          <Image style={styles().image} source={EN} resizeMode="stretch" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setLanguage("pt")}
          style={styles(language === "pt").imageWrapper}
        >
          <Image style={styles().image} source={PT} resizeMode="stretch" />
        </TouchableOpacity>
      </View>
      <View style={styles().buttonWrapper}>
        <Button onPress={onSubmit} text="Confirm" />
      </View>
    </SafeAreaView>
  );
};

const styles = (isSelect = false) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 24,
      paddingTop: 16,
      backgroundColor: WhiteLabelConfig.THEME.background,
    },
    title: {
      color: WhiteLabelConfig.THEME.title,
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 12,
    },
    rowCategory: {
      flexDirection: "row",
    },
    imageWrapper: {
      marginLeft: 6,
      borderWidth: 2.5,
      borderColor: isSelect ? WhiteLabelConfig.THEME.secondary : "transparent",
      borderRadius: 8,
    },
    image: {
      width: 60,
      height: 35,
      borderRadius: 8,
    },
    buttonWrapper: {
      marginTop: 16,
      alignSelf: "flex-start",
    },
  });
