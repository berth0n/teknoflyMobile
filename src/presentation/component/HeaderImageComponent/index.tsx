import React from 'react'
import { View, ImageBackground, Image, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'


export const HeaderImageComponent = (props: any) => {
    const {backAction, params}=props;

    return (
        <View>
            <ImageBackground
                source={params.background}
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
                    source={params.logo}
                    style={styles.logo}

                >

                </Image>
            </View>
            <View style={styles.container}>
                <View style={styles.textContaier}>
                    <Text style={styles.title}>
                        {params.title}
                    </Text>
                    <Text style={styles.rank}></Text>
                </View>
                <View>
                    <Text>Info</Text>
                </View>
            </View>
        </View>
    )
}