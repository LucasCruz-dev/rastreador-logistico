import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import {css} from '../assets/css/Css'


export default function Login(){
    return (
        <KeyboardAvoidingView
         behavior={Platform.OS === "ios" ? "padding" : "height"}
         style={[css.container]}>
            <View>
                <Text>Imagem de Login</Text>
            </View>
            <View>
                <Text style={css.login__msg}>Usuário ou Senha inválidos</Text>
            </View>
            <View style={css.login__form}>
                <TextInput style={css.login__input} placeholder='Usuário' />
                <TextInput style={css.login__input} placeholder='Senha' secureTextEntry={true} />
                <TouchableOpacity style={css.login__button}>
                    <Text style={css.login__buttonText}> ENTRAR NO SISTEMA</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
      
    );
}