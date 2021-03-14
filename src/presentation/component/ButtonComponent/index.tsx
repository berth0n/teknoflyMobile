import React from 'react'
import {View, TouchableOpacity, Text} from 'react-native'
import {componentStyle} from '../componentStyle'
import { LabelComponent } from '../LabelComponent'

export const ButtonComponent = (props:any)=>{
    const {label, action}=props
    return(
        <View style={componentStyle.button}>
            <TouchableOpacity
            onPress={()=>action()}
            >
                <LabelComponent label={label} type='buttonText'/>
            </TouchableOpacity>
        </View>
    )
}