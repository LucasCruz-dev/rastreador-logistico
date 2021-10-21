import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Home(props){
return (
 <View>
     <Text>Esse é meu componente Home</Text>
     <Button title='Login' onPress={()=> props.navigation.navigate('Login')}/>
 </View>
);
}