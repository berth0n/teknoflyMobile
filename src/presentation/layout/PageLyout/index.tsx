import React from 'react'
import { View } from 'react-native'
import {layoutStyle} from '../layoutStyle'

export const PageLayout = (props) => {
    const { children } = props

    return (
        <View style={layoutStyle.container}>
            {children}
        </View>
    )
}