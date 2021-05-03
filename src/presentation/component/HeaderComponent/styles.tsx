import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        display:'flex',
        width:'100%',
        flexDirection:'row',
        flexWrap:'wrap',
        height:35,
        backgroundColor:'orange',
        justifyContent:'space-between',
        marginVertical:5,
    },
    item:{
        display:'flex',
        padding:10,
    },
    menu:{
        height:30,
        width:30,
        marginLeft:5,
        
    },
    text:{
        fontFamily:'DigitaltsOrange',
        justifyContent:'center',
        alignItems:'center',
        color:'white',
        fontSize:22,
        alignSelf:'flex-end',
        paddingHorizontal:10,
        height:30,
        marginTop:5,
        
    }
})