import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {


    },
    profile: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 5,
        borderColor: '#F58239',
        margin:5,
        padding:5
    }
    ,
    buttons: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%'
    },
    menu: {
        marginTop: 10,
        paddingHorizontal: 5,
    },
    textContainer: {
        padding: 5,
        flexDirection:'column'
    },
    textPrimary:{
        fontFamily:'Backslash',
        fontSize:18,
        color:'white'
    },
    textSecondary:{
        fontFamily:'Backslash',
        fontSize:16,
        fontWeight:'bold',
        color:'blue'
    },
  
    background: {
        width: '100%',
        flexDirection: 'row',
        backgroundColor:'orange'
    },
})