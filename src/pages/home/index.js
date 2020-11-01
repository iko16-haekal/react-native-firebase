import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Home = (props) => {
  return (
    <View style={styles.page}>
      <Text>home</Text>
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
