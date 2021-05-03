import { PropTypes } from 'prop-types'
import React from 'react'
import { Text, View } from 'react-native'
import { componentStyle } from '../componentStyle'



export const LabelComponent = (props: any) => {
    const { label, type } = props
   
    return (
        
        <View>
         

               {type && type==='normal'&&<Text style={componentStyle.label}>{label}</Text>}
               {type && type==='primaryTitle' && <Text style={componentStyle.primaryTitle}>{label}</Text>}
               {type && type==='secondaryTitle' && <Text style={componentStyle.secondaryTitle}>{label}</Text>}
               {type && type==='buttonText' && <Text style={componentStyle.buttonText}>{label}</Text>}
               {type && type==='smallText' && <Text style={componentStyle.smallText}>{label}</Text>}
               {type && type==='primaryText' && <Text style={componentStyle.primaryText}>{label}</Text>}

            

        </View>
    )
}


LabelComponent.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string
}

LabelComponent.defaultProps = {
    label: '',
    type: 'normal'
}