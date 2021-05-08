import React from 'react'
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { styles } from './styles'


export const CardComponent = (props: any) => {
    const { data, action } = props;
  
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