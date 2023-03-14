import React from "react";
import {
  Control,
  Controller,
  FieldError,
  FieldErrorsImpl,
} from "react-hook-form";
import { StyleSheet, TextInput, TextInputProps } from "react-native";
import { IFormSearch } from "types";

interface Props extends TextInputProps {
  control: Control<IFormSearch>;
  name: keyof IFormSearch;
}

export const Input = ({ name, control, ...rest }: Props) => {
  return (
    <Controller
      control={control}
      rules={{
        required: true,
      }}
      name={name}
      render={({ field: { onChange, value } }) => (
        <TextInput
          autoCapitalize="none"
          style={styles.input}
          onChangeText={onChange}
          value={value}
          {...rest}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    paddingLeft: 8,
    fontSize: 16,
  },
});
