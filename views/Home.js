import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Home({navigation}){
return (
 <View>
     <Text>Esse é meu componente Home</Text>
     <TouchableOpacity
        onPress={()=>navigation.navigate('Login')}
     >
       <Text> Ir para login</Text>
     </TouchableOpacity>
     
 </View>
);
}