import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        alignItems: 'flex-start',
        borderWidth: 1,
        width: '100%',
        height:40,
        justifyContent:'space-between'
        
    },
    image: {
        width: 20,
        height: 20,
        padding: 5,
        paddingHorizontal:10,
    }
    ,
    imageStart:{
        width:40,
        height:40,
        alignItems:'flex-start'
    },
    imageEnd:{
        width:40,
        height:40,
        alignItems:'flex-end'
    },
    numberOfFood: {
        paddingHorizontal: 10,
    
        alignItems: 'center',
        justifyContent: 'center',
        color: 'blue'
    },
    textValue:{
        fontSize:18,
        color:'blue',
        fontFamily:'Backslash',
      
    }
})