import { StyleSheet } from "react-native";

const css = StyleSheet.create({
    container: {
 flex:1,
 justifyContent:'center',
 alignItems:'center',
 backgroundColor:'#222'
},

login__msg:(text='none')=>({
    fontWeight: "bold",
    fontSize: 15,
    color : 'red',
    marginTop: 10,
    marginBottom: 15,
    display: text

}),
login__form: {
width: "90%",
},
login__input: {
    backgroundColor:"#fff",
    fontSize:19,
    padding: 10,
    marginBottom:15

    },

    login__btn:{
    padding: 22,
    backgroundColor : "#f58634",
    alignSelf:"center",
    borderRadius:5    
    },
    login__btnText: {

    }

});
export {css};