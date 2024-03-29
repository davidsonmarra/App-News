import React, { memo } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NewsDTO } from "@types";
import { WhiteLabelConfig } from "@modules";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@routes";

interface Props {
  data: NewsDTO;
}

const CardNewComponent = ({ data }: Props) => {
  const { navigate } =
    useNavigation<NavigationProp<RootStackParamList, "News">>();

  const handleNavigateToNewDetails = () => {
    navigate("NewDetails", { newData: data });
  };

  return (
    <TouchableOpacity
      onPress={handleNavigateToNewDetails}
      style={styles.container}
    >
      <View style={styles.wrapper}>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.image}
            source={{ uri: data.urlToImage }}
            resizeMode="stretch"
          />
        </View>
        <View style={styles.infoWrapper}>
          <Text numberOfLines={3} style={styles.text}>
            {data.title}
          </Text>
          <Text numberOfLines={1} style={styles.author}>
            {data.author}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 24,
    marginBottom: 8,
  },
  wrapper: {
    flexDirection: "row",
    backgroundColor: WhiteLabelConfig.THEME.cardBackground,
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 8,
  },
  imageWrapper: {
    width: "48%",
    height: 100,
  },
  image: {
    flex: 1,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  infoWrapper: {
    width: "48%",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingRight: 8,
    height: 100,
  },
  text: {
    fontSize: 14,
    color: WhiteLabelConfig.THEME.title,
    fontWeight: "bold",
  },
  author: {
    fontSize: 12,
    color: WhiteLabelConfig.THEME.title,
  },
});

export const CardNew = memo(CardNewComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.data, nextProps.data);
});
