import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './components/screen/Login'
import TabNav from './components/navigation/TabNav';
import DrawNav from './components/navigation/DrawNav';
import StackNav from './components/navigation/StackNav';
import Signup from './components/screen/Signup';
export default function App() {
  return (
    <DrawNav/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
