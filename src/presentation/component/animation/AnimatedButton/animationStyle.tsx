import {StyleSheet} from 'react-native'

export const animationStyle = StyleSheet.create({
    container:{
        alignItems:'center',
        padding: 10,
        justifyContent:'center',
     
    },
    box:{
        width:200,
        height:150,
        backgroundColor:'red',
        position:'absolute',
        alignItems:'center',
        justifyContent:'center'
    },
    label:{
        fontFamily:"AquareBold",
        fontSize:20,
        color:'white'
    }
})