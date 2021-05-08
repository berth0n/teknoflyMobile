import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    background: {
        width:'100%',
        height: 150,
        resizeMode: 'cover',
        position:'relative',
    },
    imageContainer: {
        flexDirection:'column',
        position:'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        top: 70,
        width: '100%',
        height: 140,
        zIndex:99,
    },
    logo: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth:10,
        borderColor:'white',
        backgroundColor:'white',
   
    },
    container: {
        top: 30,
        flexDirection: 'row',
        padding: 10,
        zIndex:-9,
        flexWrap:'wrap',
        justifyContent: 'space-between',
        marginBottom:5,
    },
    textContainer: {
        flexDirection: 'row',
        marginBottom: 15,
      
    },
    title:{
        fontFamily:"Backslash",
        fontSize:16,

    },
    rank:{
        color:'orange'
    },
    back:{
        padding:5,
        width:25,
        height:35,
        
    },
    backContainer:{
        paddingHorizontal:10,
        paddingVertical:5,
    }

})