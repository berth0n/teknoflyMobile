import React from 'react'
import { TextInput, View } from 'react-native'
import { LabelComponent } from '../../LabelComponent'
import { inputsStyle } from '../inputsStyle'
export const InputTextComponent = (props: any) => {
    const { label } = props
    return (
        <View >
            <LabelComponent label={`${label} :`} type='secondaryTitle' />
            <TextInput
                style={inputsStyle.container}
            />
        </View>
    )
}