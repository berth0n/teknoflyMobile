import React from 'react'
import { View } from 'react-native'
import {layoutStyle} from '../layoutStyle'

export const HeaderLayout = (props) => {
    const { children } = props

    return (
        <View style={layoutStyle.header}>
            {children}
        </View>
    )
}