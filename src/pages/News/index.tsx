import React, { useEffect, useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";

import {
  ActivityIndicator,
  FlatList,
  Keyboard,
  StyleSheet,
  View,
} from "react-native";
import { WhiteLabelConfig } from "@modules";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_NEWS, RESET_NEWS } from "whitelabelnews-state-manager";
import { IFormSearch, IRootState, NewsDTO } from "@types";
import { CardNew, CategoryModal, Header } from "@components";
import { Modalize } from "react-native-modalize";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";

const renderItem = ({ item }: { item: NewsDTO }) => <CardNew data={item} />;

const renderLoading = () => (
  <View style={styles.loadingWrapper}>
    <ActivityIndicator size="large" color={WhiteLabelConfig.THEME.primary} />
  </View>
);

export const News = () => {
  const [language, setLanguage] = useState("en");
  const [offset, setOffset] = useState(1);
  const modalizeRef = useRef<Modalize>(null);
  const { control, handleSubmit } = useForm<IFormSearch>({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  const dispatch = useDispatch();
  const { newsData, isEnd, isLoading } = useSelector(
    ({ news }: IRootState) => news
  );

  const onEndReached = () => {
    if (!isEnd) {
      dispatch(FETCH_NEWS({ offset: offset + 1, language }));
      setOffset(offset + 1);
    }
  };

  const handleOpenModalCategory = () => {
    modalizeRef.current?.open();
  };

  const handleSetLanguage = (value: string) => {
    setLanguage(value);
  };

  const onSubmit = (form: IFormSearch) => {
    const search = form.search;
    Keyboard.dismiss();
    modalizeRef.current?.close();
    setOffset(1);
    dispatch(RESET_NEWS());
    dispatch(FETCH_NEWS({ language, search }));
  };

  useEffect(() => {
    dispatch(FETCH_NEWS({ language }));
  }, []);

  return (
    <SafeAreaView edges={["bottom"]} style={styles.container}>
      <StatusBar style={WhiteLabelConfig.THEME.mode} translucent />
      <Header
        control={control}
        handleOpenModalCategory={handleOpenModalCategory}
        onSubmit={handleSubmit(onSubmit)}
      />
      {isLoading && !newsData.length ? (
        renderLoading()
      ) : (
        <FlatList
          keyExtractor={(item) => item.title + item.author}
          data={newsData}
          renderItem={renderItem}
          onEndReached={onEndReached}
        />
      )}
      <Modalize adjustToContentHeight ref={modalizeRef}>
        <CategoryModal
          onSubmit={handleSubmit(onSubmit)}
          language={language}
          setLanguage={handleSetLanguage}
        />
      </Modalize>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WhiteLabelConfig.THEME.background,
  },
  loadingWrapper: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 100,
  },
});
