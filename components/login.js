import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import {css} from '../assets/css/Css'


export default function Login(){
    return (
        <KeyboardAvoidingView>
            <View>
                <Text>Imagem de Login</Text>
            </View>
            <View>
                <TextInput placeholder='Usuário' />
                <TextInput placeholder='Senha' secureTextEntry={true} />
                <TouchableOpacity>
                    <Text> ENTRAR NO SISTEMA</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
      
    );
}