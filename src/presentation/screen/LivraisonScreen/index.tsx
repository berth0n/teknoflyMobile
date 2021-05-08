import React from 'react'
import { View, SafeAreaView, Platform  } from 'react-native'
import { HeaderComponent } from '../../component/HeaderComponent'
import { ListCardComponent } from '../../component/ListCardComponent'
import { ScrollListComponent } from '../../component/ScrollListComponent'
import { PageLayout } from '../../layout/PageLayout'
import { data, list } from './mock'


export const LivraisonScreen = (props: any) => {
    const { navigation } = props
    const OsVer = Platform.constants['Release'];
    console.log('vers', OsVer)
    const goBack = () => {
        navigation.goBack();
    }

    const toogleDrawer = () => {
        props.navigation.openDrawer()
    }

    const action = (data) =>{
   
        props.navigation.navigate('Detail',{
            params:{
                background:data.Image,
                logo: data.Logo,
                title:data.Title,
                infos: data.Description,
            }
        })
    }

    return (
        <View>
            <SafeAreaView>
                <HeaderComponent toogleDrawer={toogleDrawer} />
                <PageLayout >
                    <ScrollListComponent data={data} />
                    <ListCardComponent data={list} action={action}/>
                </PageLayout>
            </SafeAreaView>
        </View>
    )
}