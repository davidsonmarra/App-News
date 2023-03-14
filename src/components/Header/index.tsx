import React from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { WhiteLabelConfig } from "@modules";
import { Logo } from "@assets";
import { FontAwesome } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Input } from "../Input";
import { IFormSearch } from "../../../types";
import { Control } from "react-hook-form";

interface Props {
  control: Control<IFormSearch>;
  handleOpenModalCategory: () => void;
  onSubmit: () => void;
}

export const Header = ({
  handleOpenModalCategory,
  control,
  onSubmit,
}: Props) => {
  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <View style={styles.logoWrapper}>
        <Logo width={200} height={50} />
      </View>
      <View style={styles.formWrapper}>
        <View style={styles.inputWrapper}>
          <TouchableOpacity onPress={onSubmit}>
            <FontAwesome
              name="search"
              size={24}
              color={WhiteLabelConfig.THEME.secondary}
            />
          </TouchableOpacity>
          <Input control={control} name="search" />
        </View>
        <TouchableOpacity onPress={handleOpenModalCategory}>
          <FontAwesome
            name="filter"
            size={24}
            color={WhiteLabelConfig.THEME.secondary}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: WhiteLabelConfig.THEME.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginBottom: 12,
  },
  logoWrapper: {
    alignItems: "center",
    marginBottom: 8,
  },
  formWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputWrapper: {
    width: "85%",
    flexDirection: "row",
    height: 32,
    backgroundColor: "#ffffff55",
    alignItems: "center",
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  text: {
    color: WhiteLabelConfig.THEME.title,
    fontSize: 16,
    fontWeight: "bold",
  },
});
