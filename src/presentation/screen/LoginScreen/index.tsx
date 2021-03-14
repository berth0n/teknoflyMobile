import React from 'react'
import { LabelComponent } from '../../component/LabelComponent'
import { HeaderLayout } from '../../layout/HeaderLayout'
import { PageLayout } from '../../layout/PageLyout'
import { HeaderTemplate } from '../../template/HeaderTemplate'


export const LoginScreen=(props:any)=>{

    return(
        <HeaderLayout>
            <HeaderTemplate title="Login" description="Bienvenu sur notre plateforme"/>
            <PageLayout>
            <LabelComponent label="Login"/>
            </PageLayout>
        </HeaderLayout>
    )
}