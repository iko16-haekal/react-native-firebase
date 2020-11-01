import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const Input = ({label, placeholder, keyboardType, isTextArea}) => {
  if (isTextArea) {
    return (
      <View>
        <Text style={styles.label}>{label}</Text>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          keyboardType={keyboardType}
          numberOfLines={5}
          style={styles.textArea}
        />
      </View>
    );
  }
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  label: {
    fontSize: 15,
    marginBottom: 5,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 30,
  },
  textArea: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 30,
    textAlignVertical: 'top',
  },
});
