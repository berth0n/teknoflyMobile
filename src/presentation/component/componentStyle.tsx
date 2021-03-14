
import { StyleSheet } from 'react-native'


export const componentStyle = StyleSheet.create({
    label:{
        color:'green',
        fontSize:14
    },
    primaryTitle:{
        fontSize:25,
        color:'white',
        fontFamily:'Backslash',
        paddingHorizontal:5,
    },
    secondaryTitle:{
        fontSize:14,
        color:'white',
        fontWeight:'bold',
        paddingHorizontal:5,
        margin:0,
       
    },
   button:{
       marginTop:20,
       elevation:4,
       margin:2,
       width:'100%',
       justifyContent:'center',
       alignItems:'center',
       height:60,
       backgroundColor:'white',
       borderRadius:30,
   },
   buttonText:{
       fontSize:20,
       fontFamily:'Backslash'
   }
})