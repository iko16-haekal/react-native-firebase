import React, {useState} from 'react';
import {Button, StyleSheet, Text, View, Dimensions, Alert} from 'react-native';
import Firebase from '../../config/Firebase';
import {Input} from '../../components';
const {height} = Dimensions.get('window');
const Tambah = (props) => {
  const [nama, setNama] = useState('');
  const [nomer, setNomer] = useState('');
  const [alamat, setAlamat] = useState('');
  const kontakRef = Firebase.database().ref('kontak');
  const submit = () => {
    if (nama && alamat && nomer) {
      const data = {
        nama: nama,
        nomer: nomer,
        alamat: alamat,
      };
      kontakRef
        .push(data)
        .then((data) => {
          Alert.alert('berhasil', 'berhasil menambah data');
          props.navigation.replace('Home');
        })
        .catch((err) => console.log(err));
    } else {
      Alert.alert('gagal', 'input tidak boleh kosong');
    }
  };

  return (
    <View style={styles.wrapper}>
      <Input
        placeholder="masukan nama"
        label="nama"
        value={nama}
        onChangeText={(val) => setNama(val)}
      />
      <Input
        placeholder="masukan nomer telepon"
        label="nomer telepon"
        keyboardType="number-pad"
        value={nomer}
        onChangeText={(val) => setNomer(val)}
      />
      <Input
        placeholder="masukan nomer alamat"
        label="nomer alamat"
        isTextArea={true}
        value={alamat}
        onChangeText={(val) => setAlamat(val)}
      />
      <Button onPress={submit} title="submit" />
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
