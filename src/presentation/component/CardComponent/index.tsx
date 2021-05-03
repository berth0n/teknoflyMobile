import React from 'react'
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { styles } from './styles'

const data = {
    NotificationTitle: 'Nouveau',
    Title: 'Gastro Pizza',
    Description: 'Pizza Américaine, Burger, Sandwiches',
    Livraison: 'GRATUIT',
    Prix_min: '20.000 Ar',
    Image: '',
    Logo: '',
    IsClosed: false,
    ClosedDescription: 'Fermé pour livraison',
    Rank: '3.5(605)',
    ImageBackground: '../../../assets/images/standard/gastro_pizza.jpeg'
}
export const CardComponent = (props: any) => {
    const { data, action } = props;
    const imageBackground = { uri: data.Image };
    const logo = require('../../../assets/images/logo/gastro.png');
    return (
        <View style={styles.cardMain}>
            <TouchableOpacity 
            onPress={action}
            style={styles.card}>

                <ImageBackground
                    source={data.Image}
                    style={styles.imageBackground}
                    imageStyle={{ borderRadius: 3 }}
                >
                    <View>
                        <Text style={styles.note}>{data.NotificationTitle}</Text>
                    </View>
                    <View style={styles.logoContainer}>
                        <View style={styles.logoBackground}>
                            <Image
                                source={data.Logo}
                                style={styles.logo}
                            />
                        </View>
                    </View>

                </ImageBackground>
                <View style={styles.cardDescription}>
                    <View style={styles.towColumns}>
                        <View style={styles.towRows}>
                            <Text style={styles.title}>{data.Title}</Text>
                            <Text style={styles.listCategory}>{data.Description}</Text>
                        </View>
                        <Text style={styles.rank}>{data.Rank}</Text>
                    </View>
                    <View style={styles.information}>
                        <View style={styles.informationItem}>
                            <Text style={styles.info}>{data.Livraison}</Text>
                        </View>
                        <View style={styles.informationItem}>
                            <Text  style={styles.info}>A partir de : {data.Prix_min}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>

        </View>
    )
}