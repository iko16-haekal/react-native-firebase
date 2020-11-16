import {faEdit, faTrash} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import Firebase from '../../config/Firebase';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Alert} from 'react-native';

const List = ({text, nomer, id, toUbah, ...rest}) => {
  const remove = () => {
    Alert.alert(
      'hapus data',
      'Yakin ingin hapus?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            Firebase.database()
              .ref('kontak/' + id)
              .remove();
          },
        },
      ],
      {cancelable: false},
    );
  };
  return (
    <TouchableOpacity style={styles.list} {...rest}>
      <View>
        <Text style={{fontSize: 17}}>{text}</Text>
        <Text style={{fontSize: 12, color: 'gray'}}>{nomer}</Text>
      </View>
      <View style={styles.icon}>
        <FontAwesomeIcon icon={faEdit} color="skyblue" onPress={toUbah} />
        <Text>{`          `}</Text>
        <FontAwesomeIcon icon={faTrash} color="red" onPress={remove} />
      </View>
    </TouchableOpacity>
  );
};

export default List;

const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
    padding: 20,
    borderWidth: 0,
    borderRadius: 5,
    backgroundColor: 'white',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  icon: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
