import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Login, Rastreio } from './views';


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} 
        options = {{
          title:'Bem-Vindo',
         
        }}
        />
        <Stack.Screen name="Login" options = {{headerShown: false}} component={Login} />
        <Stack.Screen name="Rastreio" component={Rastreio} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


