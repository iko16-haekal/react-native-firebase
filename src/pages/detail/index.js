import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Firebase from '../../config/Firebase';

const Detail = ({navigation, route}) => {
  const [kontak, setKontak] = useState({});
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    Firebase.database()
      .ref('kontak/' + route.params.id)
      .once('value', (querySnapShot) => {
        let data = querySnapShot.val() ? querySnapShot.val() : {};
        const kontakItem = {...data};
        setKontak(kontakItem);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text>nama: {kontak.nama}</Text>
        <Text>nomer: {kontak.nomer}</Text>
        <Text>alamat: {kontak.alamat}</Text>
      </View>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
  },
  card: {
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 5,
  },
});
