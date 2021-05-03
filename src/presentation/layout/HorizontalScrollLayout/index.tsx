import React from 'react'
import {View, ScrollView} from 'react-native'


export const HorizontalScrollLayout= (props:any) =>{
    const {children}=props;

    return(
        <ScrollView horizontal>
            {children}
        </ScrollView>
    )
}