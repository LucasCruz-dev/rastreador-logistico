import React from 'react';
import { StyleSheet, Platform, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import {css} from '../assets/css/Css'
export default function Login(){
return (
 <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={css.container} >
     <View >
         <View>
             <Text style={css.login__msg()}>Usuário ou senha inválidos</Text>
         </View>
        <View style={css.login__form}>
            <TextInput style={css.login__input} placeholder='Usuário'/>
            <TextInput style={css.login__input} placeholder='Senha' secureTextEntry={true}/>
            <TouchableOpacity style={css.login__btn}>
                <Text style={css.login__btnText}>Entrar</Text>
            </TouchableOpacity>
        </View>
     </View>
 </KeyboardAvoidingView>
);
}