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
  const getData = () => {
    Firebase.database()
      .ref('kontak/')
      .on('value', (querySnapShot) => {
        let data = querySnapShot.val() ? querySnapShot.val() : {};
        const kontakItem = {...data};
        console.log('berubaaaaaah');
        setKontak(kontakItem);
        setKontakKey(Object.keys(kontakItem));
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <View style={styles.page}>
      <ScrollView>
        <View style={styles.page}>
          {kontakKey ? (
            kontakKey.map((key) => {
              {
                return kontak[key] ? (
                  <List
                    text={kontak[key].nama}
                    nomer={kontak[key].nomer}
                    key={key}
                    onPress={() =>
                      props.navigation.navigate('Detail', {id: key})
                    }
                  />
                ) : (
                  <View></View>
                );
              }
            })
          ) : (
            <Text>loading</Text>
          )}
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
    paddingBottom: 50,
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
