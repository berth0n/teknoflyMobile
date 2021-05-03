import React from 'react'
import { View, ImageBackground, Image, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'


export const HeaderImageComponent = (props: any) => {
    const {backAction}=props;
    return (
        <View>
            <ImageBackground
                source={require('../../../assets/images/standard/burgers.jpg')}
                style={styles.background}
            >
                <TouchableOpacity style={styles.backContainer}
                onPress={backAction}
                >
                    <Image
                        source={require('../../../assets/images/icon/back_white2.png')}
                        style={styles.back}

                    ></Image>
                </TouchableOpacity>
            </ImageBackground>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../../../assets/images/logo/gastro.png')}
                    style={styles.logo}

                >

                </Image>
            </View>
            <View style={styles.container}>
                <View style={styles.textContaier}>
                    <Text style={styles.title}>
                        La Gastronomie Pizza
                    </Text>
                    <Text style={styles.rank}>29 Avis</Text>
                </View>
                <View>
                    <Text>Info</Text>
                </View>
            </View>
        </View>
    )
}