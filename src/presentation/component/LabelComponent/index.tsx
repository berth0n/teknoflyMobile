import React from 'react'
import { Text, View } from 'react-native'
import { PropTypes } from 'prop-types'
import {componentStyle} from '../componentStyle'


export const LabelComponent = (props: any) => {
    const { label, type } = props

    return (
        <View>
           {!type && <Text style={componentStyle.label}>{label}</Text>}
           {type==="primaryTitle" && <Text style={componentStyle.primaryTitle}>{label}</Text>}
           {type==="primaryTitleBlack" && <Text style={componentStyle.primaryTitleBlack}>{label}</Text>}
           {type==="secondaryTitle" && <Text style={componentStyle.secondaryTitle}>{label}</Text>}
        </View>
    )
}


LabelComponent.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string
}

LabelComponent.defaultProps = {
    label: '',
    type:''
}