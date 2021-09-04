import React from 'react';
import Landing from '../screen/Landing';
import Signup from '../screen/Signup';
import Login from '../screen/Login'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export default function StackNav() {
    const stack=createNativeStackNavigator();
    function LogoTitle() {
      return (
        <Image
          style={{ width: 50, height: 50 }}
          source={require('../../assets/icon.png')}
        />
      );
    }
    return (
      <NavigationContainer>
          <stack.Navigator>
          <stack.Screen name="landing" component={Landing} options={{headerShown:false}}/>
          <stack.Screen name="signup" component={Signup}/>
          <stack.Screen name="login" component={Login} options={{title:"Log in"}}/>
          </stack.Navigator>
      </NavigationContainer>
    );

  }