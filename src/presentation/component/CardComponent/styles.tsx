import { Dimensions, StyleSheet } from 'react-native'

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

    imageBackground: {
        flex: 1,
        height: 120,
        resizeMode: 'cover',

    },

    card: {
        elevation: 1,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#F6F6F6',
        borderRadius: 6,

    },

    logo: {
        width: 50,
        height: 50,
        borderRadius: 25,
        position: 'absolute',
        top: 10,
    },

    logoBackground: {
        width: 80,
        height: 80,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },

    logoContainer: {
        position: 'absolute',
        width: '100%',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: -30

    },

    cardDescription: {
        marginTop: 10,
        marginBottom: 5,
        paddingHorizontal: 5,
        
    },

    towColumns: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },

    twoRows: {
        flexDirection: 'column'
    },

    title: {
        fontSize: 20,
        fontFamily: 'DigitaltsOrange',
    },

    listCategory: {
        fontSize: 14,
        flexWrap: 'wrap',
        fontFamily:'RondalRegular'

    },

    information: {
        marginTop: 5,
        flexDirection: 'row',

    },
    informationItem: {
        paddingRight: 15
    },
    
    info: {
        fontFamily: 'RondalRegular',
        fontSize: 12,
        color:'black'
    },
    note: {
        margin: 5,
        paddingHorizontal: 15,
        borderRadius: 10,
        paddingVertical: 5,
        alignSelf: 'flex-start',
        backgroundColor: 'white',
        fontFamily: 'DigitaltsOrange',
        

    },
    rank:{
        fontFamily: 'JosefinSansSemibold',
        color:'orange'
    },
    cardMain: {
        marginTop: 10,
       
    }
    ,

})