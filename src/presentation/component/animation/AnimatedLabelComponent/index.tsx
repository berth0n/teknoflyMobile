import React from 'react'
import { View, Text } from 'react-native'
import { animated, useSpring } from 'react-spring'


export const AnimatedLabelComponent = (props: any) => {
    const AnimatedView = animated(View);

    const animation = useSpring({
        opacity: 1,
        top:0,
        from: { opacity: 0, top:50 },
        config:{duration:300}
    })
    const fade = useSpring({
        opacity: 1,
        from: { opacity: 0},
        config:{duration:1000}
    })
    const count = useSpring({
        number: 1,
        from: { number: 0 }
    })

    return (
        <AnimatedView style={[animation, fade]}>
            <Text>Bonjour</Text>
        
        </AnimatedView>
    )
}