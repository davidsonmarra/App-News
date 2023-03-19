import React from "react";
import { WhiteLabelConfig } from "@modules";
import { StatusBar } from "expo-status-bar";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Logo } from "@assets";
import { FontAwesome } from "@expo/vector-icons";
import {
  RouteProp,
  NavigationProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { RootStackParamList } from "@routes";
import { Button } from "@components";

export const NewDetails = () => {
  const { goBack } =
    useNavigation<NavigationProp<RootStackParamList, "NewDetails">>();
  const { newData } =
    useRoute<RouteProp<RootStackParamList, "NewDetails">>().params;

  const handleOpenNew = () => {
    Linking.openURL(newData.url);
  };

  return (
    <>
      <SafeAreaView edges={["top"]} style={styles.header}>
        <StatusBar style={WhiteLabelConfig.THEME.mode} translucent />
        <TouchableOpacity onPress={goBack}>
          <FontAwesome
            name="chevron-left"
            size={24}
            color={WhiteLabelConfig.THEME.secondary}
          />
        </TouchableOpacity>
        <Logo width={200} height={50} />
        <View />
      </SafeAreaView>
      <SafeAreaView edges={["bottom"]} style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.contentContainer}
          style={styles.wrapperScrollView}
        >
          <Image
            source={{ uri: newData.urlToImage }}
            resizeMode="stretch"
            style={styles.image}
          />
          <Text style={styles.author}>
            <Text style={styles.authorBold}>Author:</Text> {newData.author}
          </Text>
          <Text style={styles.title}>{newData.title}</Text>
          <Text style={styles.description}>{newData.description}</Text>
          <Text style={styles.content}>{newData.content}</Text>
        </ScrollView>
        <View style={styles.buttonWrapper}>
          <Button onPress={handleOpenNew} text="Open" />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WhiteLabelConfig.THEME.background,
  },
  header: {
    width: "100%",
    backgroundColor: WhiteLabelConfig.THEME.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  image: {
    width: 350,
    height: 200,
    alignSelf: "center",
    borderRadius: 8,
  },
  wrapperScrollView: {
    paddingHorizontal: 24,
  },
  contentContainer: {
    paddingVertical: 12,
  },
  author: {
    fontSize: 12,
    marginTop: 8,
    color: WhiteLabelConfig.THEME.title,
  },
  authorBold: {
    fontWeight: "bold",
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
    color: WhiteLabelConfig.THEME.title,
    marginTop: 12,
  },
  description: {
    fontSize: 16,
    fontStyle: "italic",
    color: WhiteLabelConfig.THEME.title,
    marginTop: 8,
  },
  content: {
    color: WhiteLabelConfig.THEME.title,
    fontSize: 16,
    marginTop: 12,
  },
  buttonWrapper: {
    width: "100%",
    paddingBottom: 12,
    paddingHorizontal: 24,
  },
});
