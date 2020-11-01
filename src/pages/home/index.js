import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {List} from '../../components';
import Firebase from '../../config/Firebase';

const Home = (props) => {
  const [kontak, setKontak] = useState({});
  const [kontakKey, setKontakKey] = useState([]);
  useEffect(() => {
    Firebase.database()
      .ref('kontak')
      .once('value', (querySnapShot) => {
        let data = querySnapShot.val() ? querySnapShot.val() : {};
        const kontakItem = {...data};
        setKontak(kontakItem);
        setKontakKey(Object.keys(kontakItem));
      });
  }, []);
  return (
    <View style={styles.page}>
      <ScrollView>
        <View style={styles.page}>
          {kontakKey ? (
            kontakKey.map((key) => {
              return (
                <List
                  text={kontak[key].nama}
                  nomer={kontak[key].nomer}
                  key={key}
                />
              );
            })
          ) : (
            <Text>loading</Text>
          )}
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            style={styles.btnTambah}
            onPress={() => props.navigation.navigate('Tambah')}>
            <FontAwesomeIcon icon={faPlus} color="#fff" size={20} />
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={styles.btnTambah}
          onPress={() => props.navigation.navigate('Tambah')}>
          <FontAwesomeIcon icon={faPlus} color="#fff" size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 10,
  },
  buttonWrapper: {
    flex: 1,
    position: 'absolute',
    right: 0,
    bottom: 0,
    margin: 30,
  },
  btnTambah: {
    padding: 20,
    backgroundColor: 'skyblue',
    color: '#fff',
    borderRadius: 30,
  },
});
export default Home;
