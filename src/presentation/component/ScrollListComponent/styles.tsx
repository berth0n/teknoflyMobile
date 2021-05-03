import { StyleSheet, Dimensions } from 'react-native'

export const styles = StyleSheet.create({
    item: {
        marginRight: 10,
        paddingVertical: 5,
        fontFamily:'JosefinSansSemibold'
    },

    container: {
        backgroundColor: 'white',
        paddingVertical: 15,
        paddingRight:10,
        marginRight:5,
        minWidth: Dimensions.get('window').width,
    },

    active: {
        backgroundColor: 'orange',
        color:'white',
        borderRadius: 10,
        paddingHorizontal: 20,
      

    },

    voirPlus: {
        color: 'orange',
    }

})