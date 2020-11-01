import React from 'react';
import {Button, StyleSheet, Text, View, Dimensions} from 'react-native';
import {Input} from '../../components';
const {height} = Dimensions.get('window');
const Tambah = (props) => {
  return (
    <View style={styles.wrapper}>
      <Input placeholder="masukan nama" label="nama" style={styles.textInput} />
      <Input
        placeholder="masukan nomer telepon"
        label="nomer telepon"
        keyboardType="number-pad"
      />
      <Input
        placeholder="masukan nomer alamat"
        label="nomer alamat"
        isTextArea={true}
      />
      <Button title="submit" />
    </View>
  );
};

export default Tambah;

const styles = StyleSheet.create({
  wrapper: {
    padding: 30,
    flex: 1,
    height: height,
    justifyContent: 'center',
  },
});
