
import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import css from '../assets/css/Css'

export default function Home(props){
    return (
        <View>
            <Text>HOME do sistema</Text>
      
      <TouchableOpacity onPress={()=> props.navigation.navigate('Login')}>
          <Text>IR PARA LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=> props.navigation.navigate('Rastreio')}>
          <Text>IR PARA Rastreio</Text>
      </TouchableOpacity>
      
        </View>
      
    );
} 