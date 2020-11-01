import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, Tambah} from '../pages';

const Stack = createStackNavigator();
const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Tambah" component={Tambah} />
    </Stack.Navigator>
  );
};

export default Routes;
