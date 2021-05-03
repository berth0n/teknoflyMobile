import React from 'react'
import { View, SafeAreaView } from 'react-native'
import { HeaderComponent } from '../../component/HeaderComponent'
import { HeaderImageComponent } from '../../component/HeaderImageComponent'
import { ListCardComponent } from '../../component/ListCardComponent'
import { ScrollListComponent } from '../../component/ScrollListComponent'
import { PageLayout } from '../../layout/PageLayout'
import {list, data} from './mock'


export const DetailScreen = (props: any) => {
    const { navigation } = props
    const goBack = () => {
        navigation.goBack();
    }

    const toogleDrawer = () => {
        props.navigation.openDrawer()
    }

    const backAction = () =>{
        props.navigation.goBack()
    }
    return (
        <View>
            <SafeAreaView>
                <View style={{marginBottom:25}}>
                    <HeaderImageComponent backAction={backAction} />
                </View>
                <PageLayout >
                <ScrollListComponent data={data} />
                </PageLayout>
            </SafeAreaView>
        </View>
    )
}