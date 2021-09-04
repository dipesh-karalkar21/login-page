import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../screen/Login'
import Signup from '../screen/Signup';

const Drawer = createDrawerNavigator();

export default function DrawNav() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Signup" component={Signup} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}