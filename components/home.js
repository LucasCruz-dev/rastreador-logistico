import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Home(props){
    return (
        <View>
            <Text>HOME do sistema</Text>
      <Button title='Ir para Login' onPress={()=> props.navigation.navigate('Login')}/>
        </View>
      
    );
} 