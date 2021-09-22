import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import css from './assets/css/Css';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Home, Login, Rastreio} from './components';
import AreaRestrita from './components/areaRestrita/areaRestrita';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
  
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" 
                        component={Home}
                        options={{
                          title:"Bem Vindo",
                          headerTintColor:'#333',
                          headerTitleStyle:{alignSelf:'center'} // Ver outras props do options
                        }}
          />
          <Stack.Screen name="Login" options={{headerShown:false}} component={Login}/>
          <Stack.Screen name="Rastreio" component={Rastreio}/>
          <Stack.Screen name="AreaRestrita" component={AreaRestrita}/>
         
        </Stack.Navigator>
      </NavigationContainer>

    
  );
}


