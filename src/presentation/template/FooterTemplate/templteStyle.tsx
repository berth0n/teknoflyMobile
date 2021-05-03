import { StyleSheet } from 'react-native'

export const templateStyle = StyleSheet.create({
    page: {
        position: 'relative', height: '100%',
        flexDirection:'column'
    },
 
    background: {
        backgroundColor: 'orange', height: '55%', position:'relative',
        width:'100%'
    },
 
    logo: {
        backgroundColor: '#fff', height: '45%',position:'relative',
        width:'100%',justifyContent:'center',
        alignItems:'center'
    },


    svg: {
        position: 'relative', bottom: '32%'
    },
    form:{
         backgroundColor:'transparent',
         width:'100%',
         padding:10,
         margin:20,
         borderRadius:10
    },
    textContainer: {
        position: 'absolute',
        paddingHorizontal:30,
        top:10,
        width:'100%',
        justifyContent:'center',
    
        alignItems:'center'
    },

    image:{
       flex:1,
       width:'100%',
       flexWrap:'wrap'
        
    }

})