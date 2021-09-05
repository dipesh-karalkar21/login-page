import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { render } from 'react-dom';
import Landing from '../screen/Landing'
import Login from '../screen/Login';
import Signup from '../screen/Signup'
export default function TabNav(){
    const Tab=createBottomTabNavigator();
    function LogoTitle() {
        return (
          <Image
            style={{ width: 50, height: 50 }}
            source={require('../../assets/icon.png')}
          />
        );
      }
    return(
        <NavigationContainer>
            <Tab.Navigator
            screenOptions={{
              tabBarShowLabel:false,
           
             tabBarInactiveBackgroundColor:"#561234",
             tabBarInactiveTintColor:"#ffffff",
             tabBarLabelStyle:{
                   color:"#e53935",
                   
             },
           tabBarStyle:{
               position:'absolute',
               bottom:20,
               right:20,
               left:20,
               backgroundColor:"#000000",
              
               
           },
          
            style:{
               borderRadius:20,
            }
          }}
       
            >
                <Tab.Screen name="login" component={Login}
  
                />
                <Tab.Screen name="Signup" component={Signup}/>
                <Tab.Screen name="landing" component={Landing}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}