import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { HorizontalScrollLayout } from '../../layout/HorizontalScrollLayout';
import { styles } from './styles'

interface IData {
    key: string,
    value: string,
}


export const ScrollListComponent = (props: any) => {
    const { data } = props;
    const renderItem = ({ item, index }) => {
     
        return (
            <View >
                <Text key={item.key} style={[styles.item, index === 0 ? styles.active : '', index===data.length-1?styles.voirPlus:'']}>{item.value}</Text>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.key}
            >
            </FlatList>

        </View>
    )
}