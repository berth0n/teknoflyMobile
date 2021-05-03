import React from 'react'
import { View } from 'react-native'
import { VerticalScrollLayout } from '../../layout/VerticalScrollLayout'
import { CardComponent } from '../CardComponent'


export const ListCardComponent = (props: any) => {
    const { data, action } = props

    const _list = data && data.length > 0 && data.map((item, index) => {
        return (
            <View key={index}>
                <CardComponent data={item} action={action} />
            </View>
        )
    })

    return (

        <VerticalScrollLayout>
            <View >
                {_list}
            </View>
        </VerticalScrollLayout>

    )
}