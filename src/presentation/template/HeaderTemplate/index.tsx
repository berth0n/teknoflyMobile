import React from 'react'
import { Image, View, Text } from 'react-native'
import { templateStyle } from '../templteStyle'
import Svg, { Path } from 'react-native-svg'
import { LabelComponent } from '../../component/LabelComponent'

export const HeaderTemplate = (props: any) => {
    const {title, description}=props
    return (
        <View style={templateStyle.page}>
            <View style={templateStyle.background}>
                <View style={templateStyle.element}>
                    <View style={templateStyle.container}>
                        <View style={templateStyle.item}>
                            <Image style={templateStyle.image}
                                source={require('../../../assets/images/icon/back.png')}
                            />
                        </View>
                        <View style={templateStyle.item}>
                            <Image style={templateStyle.image}
                                source={require('../../../assets/images/icon/filter.png')}
                            />
                        </View>
                    </View>
                </View>
                <View style={templateStyle.textContainer}>
                    <LabelComponent label={title} type={'primaryTitle'}/>
                    <LabelComponent label={description} type={'secondaryTitle'}/>
                </View>
                <Svg
                    height="200"
                    width="100%"
                    viewBox="0 0 1440 320"
                    style={templateStyle.svg}
                >
                    <Path
                        fill="#0099ff"
                        d="M0,256L60,234.7C120,213,240,171,360,144C480,117,600,107,720,128C840,149,960,203,1080,208C1200,213,1320,171,1380,149.3L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
                    />
                </Svg>
            </View>


        </View>
    )
}