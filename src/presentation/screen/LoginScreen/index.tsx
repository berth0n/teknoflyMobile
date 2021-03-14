import React from 'react'
import { LabelComponent } from '../../component/LabelComponent'
import { HeaderLayout } from '../../layout/HeaderLayout'
import { PageLayout } from '../../layout/PageLyout'
import { FooterTemplate } from '../../template/FooterTemplate'
import {View, Text} from 'react-native'

export const LoginScreen=(props:any)=>{
    const {navigation}=props
    const handleSubmit = () =>{
        navigation.navigate('Home')
    }
    return(
        <HeaderLayout>

            <FooterTemplate title="TeknoFly" description="Bienvenu sur notre plateforme"
            action={handleSubmit}
            />
            <PageLayout>
           
            <LabelComponent label="Login" type='primaryTitle'/>
            </PageLayout>
        </HeaderLayout>
    )
}