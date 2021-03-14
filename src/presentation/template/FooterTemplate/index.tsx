import React from 'react'
import { Image, View, Text } from 'react-native'
import { templateStyle } from './templteStyle'
import Svg, { Path } from 'react-native-svg'
import { LabelComponent } from '../../component/LabelComponent'
import { InputTextComponent } from '../../component/inputs/InputTextComponent'
import { ButtonComponent } from '../../component/ButtonComponent'

export const FooterTemplate = (props: any) => {
    const {title, description, action}=props
    return (
        <View style={templateStyle.page}>
            <View style={templateStyle.logo}>
                <Image source={require('../../../assets/images/standard/Logook.png')}
                       style={templateStyle.image}
                />
            </View>
            <View style={templateStyle.background}>
           
                <View style={templateStyle.textContainer}>
                <View style={templateStyle.form}>
                    <InputTextComponent label="Utilisateur"/>
                    <InputTextComponent label="Mot de passe"/>
                    <ButtonComponent label="Se connecter" action={action}/>
                </View>
                </View>
                <Svg
                    height="200"
                    width="100%"
                    viewBox="0 0 1440 320"
                    style={templateStyle.svg}
                >
                    <Path
                        fill="#0099ff"
                        d="M0,64L60,80C120,96,240,128,360,165.3C480,203,600,245,720,272C840,299,960,309,1080,298.7C1200,288,1320,256,1380,240L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                        
                        
                        />
                </Svg>
            </View>


        </View>
    )
}