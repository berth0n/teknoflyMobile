import { StyleSheet } from 'react-native'

export const templateStyle = StyleSheet.create({
    page: {
        position: 'relative', height: 200,
    },
    element: {
        top: 10,
        position: 'relative'
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    background: {
        backgroundColor: 'orange', height: 120
    },

    item: {
        padding: 5
    },
    image: {
        width: 30,
        height: 20,
        
    },
    svg: {
        position: 'relative', top: 20
    },
    textContainer: {
        position: 'absolute',
        top: 40,
        padding:10,
        
    },
    title:{
        color:'white',
        fontSize:22,
    },
    description:{
        color:'white',
        fontSize:14,
    }

})