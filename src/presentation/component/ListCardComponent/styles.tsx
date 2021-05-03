import { StyleSheet, Dimensions } from 'react-native'

export const styles = StyleSheet.create({
    item: {
        marginHorizontal: 10,
        paddingVertical: 5,
    },

    container: {
        backgroundColor: 'white',
        paddingVertical: 15,
        minWidth: Dimensions.get('window').width,
    },

    imageBackground:{
        flex:1,
        resizeMode:'cover',
    }

})