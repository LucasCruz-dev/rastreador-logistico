import {StyleSheet} from "react-native";
const css = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'#333',
    },
    
    login__msg:(text='none')=>({
    fontWeight:'bold',
    fontSize:10,
    color: '#ff0000',
    marginTop: 10,
    marginBottom: 15,
    display: text,

    }),
    login__form:{
      width: '80%',

    },

    login__input:{
      backgroundColor:'#fff',
      fontSize:19,
      padding: 7,
      marginBottom: 15
    },

   login__button:{
     padding: 12,
     backgroundColor:'#f58',
     alignSelf:"center",
     borderRadius: 10

   }



  });
  export {css};