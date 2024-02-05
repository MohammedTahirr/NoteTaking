import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import colors from '../config/colors';

const InputField = ({
  onChangeText,
  value,
  placeholder,
  placeholderTextColor,
  multiline,
  keyboardType,
  editable = true,
}) => {
  return (
    <TextInput
      style={styles.input}
      onChangeText={onChangeText}
      value={value}
      placeholder={placeholder}
      keyboardType={keyboardType}
      placeholderTextColor={placeholderTextColor}
      multiline={multiline}
      editable={editable}
      returnKeyType="done"
      autoCorrect={false}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 14,
    padding: 10,
    alignItems: 'center',
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
  },
});

export default InputField;
