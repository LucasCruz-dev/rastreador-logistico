import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import {css} from '../assets/css/Css'
export default function Login(){
return (
 <KeyboardAvoidingView>
     <View >
         <View>
             <Text>Usuário ou senha inválidos</Text>
         </View>
        <View style={css.form}>
            <TextInput placeholder='Usuário'/>
            <TextInput placeholder='Senha' secureTextEntry={true}/>
            <TouchableOpacity>
                <Text>Entrar</Text>
            </TouchableOpacity>
        </View>
     </View>
 </KeyboardAvoidingView>
);
}