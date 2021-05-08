import React from 'react'
import { View, ScrollView } from 'react-native'
import { VerticalScrollLayout } from '../../layout/VerticalScrollLayout'
import { CardComponent } from '../CardComponent'
import { CardDetailComponent } from '../CardDetailComponent'


export const ListCardDetailComponent = (props: any) => {
    const { data, action } = props

    const _list = data && data.length > 0 && data.map((item, index) => {
        return (
            <View key={index}>
                <CardDetailComponent data={item} action={action} />
            </View>
        )
    })

    return (

        <ScrollView   >
            
                {_list}
           
        </ScrollView>

    )
}