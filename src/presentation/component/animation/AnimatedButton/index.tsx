import React, { useEffect, useState } from 'react'
import { Animated, TouchableOpacity, View, Text } from 'react-native'
import { animationStyle } from './animationStyle'

export const AnimatedButton = (props: any) => {
    const { label, action, width, height } = props
    const [longueur, setLongueur] = useState(new Animated.Value(width))
    const [largeur, setLargeur] = useState(new Animated.Value(height))
    const [scalingX, setScalingX] = useState(new Animated.Value(1))
    const mvtStyle = { width: largeur, height: longueur }

    useEffect(() => {
        setLargeur(new Animated.Value(width));
        setLongueur(new Animated.Value(height))
    }, [])

    const handleClick = () => {
        let _scalex=2
      
        if(scalingX.__getValue()==1){
            _scalex=2
        }
        else{
            _scalex=1
        }
      
        Animated.timing(scalingX,{
            toValue:_scalex,
            duration:1000,
            useNativeDriver:true,
        }).start()
        setTimeout(()=>{
            setScalingX(new Animated.Value(_scalex))
        }, 1000)
    }
    return (
        <View style={animationStyle.container}>
            <TouchableOpacity
                onPress={handleClick}
                 style={[animationStyle.box, {transform:[
                    {
                        scaleX:scalingX
                    }
                ]}]}
            >
                <Animated.View>
                    <Text>{label}</Text>
                </Animated.View>
            </TouchableOpacity>
        </View>
    )
}