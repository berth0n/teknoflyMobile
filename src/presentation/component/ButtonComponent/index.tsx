import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { componentStyle } from '../componentStyle'
import { LabelComponent } from '../LabelComponent'

export const ButtonComponent = (props: any) => {
    const { type, label, action } = props
    return (
        <View>
            <View style={[componentStyle.button,
            type === 'primary' && componentStyle.buttonPrimary
            ]}>
                <TouchableOpacity
                    onPress={() => action()}
                >
                    <LabelComponent label={label} type={type==='primary'?'primaryText':'smallText'} />
                </TouchableOpacity>
            </View>
        </View>

    )
}