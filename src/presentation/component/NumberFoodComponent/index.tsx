import React, { useState, useEffect } from 'react'
import { View, TouchableOpacity, Image, Text } from 'react-native'

import { styles } from './styles'

export const NumberFoodComponent = (props: any) => {
  const { numberOfFood , setNumberOfFood } = props;
  const [textValue, setTextValue] = useState(1);
  const increase = () => {
    setTextValue(textValue + 1)
  }
  const decrease = () => {
    if(textValue>1){
    setTextValue(textValue - 1)
    }
  }
  useEffect(() => {
    setNumberOfFood(textValue)
  }, [textValue])
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.imageStart}
        onPress={decrease}
      >
        <Image
          style={[styles.image, styles.minus]}
          source={require('../../../assets/images/system/minus.png')}
        />
      </TouchableOpacity>
      <View style={styles.numberOfFood}>
        <Text style={styles.textValue}>{textValue}</Text>
      </View>
      <TouchableOpacity
        style={styles.imageEnd}
        onPress={increase}
      >
        <Image
          style={[styles.image, styles.plus]}
          source={require('../../../assets/images/system/plus.png')}
        />
      </TouchableOpacity>
    </View>
  )
}