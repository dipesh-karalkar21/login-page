import React from 'react';
import { Button, Text, View } from 'react-native';

export default function Landing({navigation}) {
 

    return (
      <View>
              <View>
                    
              </View>
              <Text> Landing</Text>
              <Button title="login" onPress={()=>navigation.navigate("login")}/>
              <Button title="signup" onPress={()=>navigation.navigate("signup")}/>
       
  
      </View>
       
    );

  }