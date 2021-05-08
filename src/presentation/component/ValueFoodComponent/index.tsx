
import React from 'react'
import {View, Text} from 'react-native'
import { priceSepartor } from '../../../data/factory'
import {styles} from './styles'
export const ValueFoodComponent = (props:any)=>{
    const {foodValue}=props
    return(
        <View style={styles.container}>
            <Text style={styles.textValue}>{priceSepartor(foodValue)}</Text><Text style={styles.textAr}> Ar</Text>
        </View>
    )
}