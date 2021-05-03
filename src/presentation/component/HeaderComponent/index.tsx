import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { styles } from './styles'

export const HeaderComponent = (props: any) => {
    const { toogleDrawer } = props;
    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity
                    onPress={toogleDrawer}
                >
                    <Image
                        style={styles.menu}
                        source={require('../../../assets/images/icon/menu.png')}
                    />
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.text}>
                    NJAKA FOOD DISTRIBUTION
            </Text>
            </View>
        </View>
    )
}