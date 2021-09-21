import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { Platform, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import {css} from '../assets/css/Css'


export default function Login(){
    const [display, setDisplay]= useState('none');
    const [user, setUser]= useState(null);
    const [password, setPassword]= useState(null);
    const [login, setLogin]= useState(null);

    //Envio de Dados de Login
    async function sendForm(){
        let response = await fetch('http://192.168.0.102:3000/login',{
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ // os dados que serão enviados 
              name: user,
              password: password
            })

        });
    }
       
        return (       

        <KeyboardAvoidingView
         behavior={Platform.OS === "ios" ? "padding" : "height"}
         style={[css.container]}> 
            <View>
                <Text>Imagem de Login</Text>
                <Text>{user} - {password}</Text>
            </View>
            <View>
                <Text style={css.login__msg(display)}>Usuário ou Senha inválidos</Text>
            </View>
            <View style={css.login__form}>
                <TextInput style={css.login__input} placeholder='Usuário' onChangeText={text=>setUser(text)}  /> 
                <TextInput style={css.login__input} placeholder='Senha' secureTextEntry={true}  onChangeText={text=>setPassword(text)} />
                <TouchableOpacity style={css.login__button} onPress={()=>sendForm()}>
                    <Text style={css.login__buttonText}> ENTRAR NO SISTEMA</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
      
    );
}