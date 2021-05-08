import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: 'gray',
        elevation: 2,
        backgroundColor: 'white',
        padding:5,
        marginBottom:10,
        paddingBottom:10,
        marginVertical: 10,
        paddingVertical:10,
    
    },
    title:{
        fontSize:16,
        fontFamily:'Backslash',
    },
    commander: {
        borderWidth: 1,
        borderColor: 'gray',
        padding:5,
        paddingHorizontal:20,
    },
    twoColumns: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
       
    },
    twoColumnsFood: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
       
    },
    twoColumnsParent: {
        marginTop:5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        width:'100%'
       
    },
    child_great:{
        width:'70%',
      
    },
    child_little:{
        width:'30%',
        alignItems:'flex-end'
       
    },
    information:{
        marginTop:5,
        flexDirection:'column',
    },
    description:{
        fontSize:14,
        width:'100%',
        fontFamily:'RondalRegular',
    },
    priceContainer:{
        marginTop:30,
        flexDirection:'row'
    },
    price:{
        fontFamily:'Backslash',
        fontSize:18,
        color:'orange'
    },
    image:{
        width:100,
        height:100
    },
    numberOfFood:{
        width:'49%'
    },
    displayNumber:{
        width:'49%'
    },


})