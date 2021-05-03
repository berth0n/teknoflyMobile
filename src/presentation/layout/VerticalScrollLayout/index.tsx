import React from 'react'
import {View, ScrollView} from 'react-native'


export const VerticalScrollLayout= (props:any) =>{
    const {children}=props;

    return(
        <ScrollView style={{
            marginBottom:200,
         
            
        }}>
            {children}
        </ScrollView>
    )
}