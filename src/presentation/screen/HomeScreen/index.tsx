import React from 'react'
import { LabelComponent } from '../../component/LabelComponent'
import { HeaderLayout } from '../../layout/HeaderLayout'
import { PageLayout } from '../../layout/PageLyout'
import { HeaderTemplate } from '../../template/HeaderTemplate'


export const HomeScreen=(props:any)=>{
   const {navigation}=props
   const goBack = () =>{
       navigation.goBack();
   }
    return(
        <HeaderLayout>

            <HeaderTemplate title="Inscription" description="Bienvenu sur notre plateforme" 
            action={goBack}
            showButton={false}/>
            <PageLayout>

            <LabelComponent label="Login" type='primaryTitle'/>
            </PageLayout>
        </HeaderLayout>
    )
}