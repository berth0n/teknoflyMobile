import { PropTypes } from 'prop-types'
import React, { useState } from 'react'
import { Animated, Text, View } from 'react-native'
import { useEffect } from 'react/cjs/react.development'
import { componentStyle } from '../componentStyle'



export const LabelComponent = (props: any) => {
    const { label, type } = props
    const [opacity, setOpacity] = useState(new Animated.Value(1))
    const [topPosition, setTopPosition]= useState(new Animated.Value(10))

    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 5000,
            useNativeDriver:true,
        }).start()
    
    
    }, [])
    return (
        
        <View>
            <Animated.View
                style={{
                    opacity: opacity,
                   
                }}
            >

               {!type && <Text style={componentStyle.label}>{label}</Text>}
               {type && type==='primaryTitle' && <Text style={componentStyle.primaryTitle}>{label}</Text>}
               {type && type==='secondaryTitle' && <Text style={componentStyle.secondaryTitle}>{label}</Text>}
               {type && type==='buttonText' && <Text style={componentStyle.buttonText}>{label}</Text>}

            </Animated.View>

        </View>
    )
}


LabelComponent.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string
}

LabelComponent.defaultProps = {
    label: '',
    type: ''
}