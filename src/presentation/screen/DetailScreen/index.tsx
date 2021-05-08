import React from 'react'
import { View, SafeAreaView, ScrollView, Alert } from 'react-native'
import { priceSepartor } from '../../../data/factory'
import { HeaderComponent } from '../../component/HeaderComponent'
import { HeaderImageComponent } from '../../component/HeaderImageComponent'
import { ListCardComponent } from '../../component/ListCardComponent'
import { ListCardDetailComponent } from '../../component/ListCardDetailComponent'
import { ScrollListComponent } from '../../component/ScrollListComponent'
import { PageLayout } from '../../layout/PageLayout'
import { list, data } from './mock'


export const DetailScreen = (props: any) => {
    const { navigation } = props
    const {params}=props.navigation.state.params;

    const goBack = () => {
        navigation.goBack();
    }

    const toogleDrawer = () => {
        props.navigation.openDrawer()
    }

    const backAction = () => {
        props.navigation.goBack()
    }

    const commander = (commande) => {
    
        const name=commande.title
        const option=commande.option
        const nombre=commande.numberOfFood
        const price=priceSepartor(commande.price)+' Ar'
        Alert.alert(
            "Ma commande",
            "- Nom : "+name+'\n- Option :'+option+'\n- Nombre: '+nombre+'\n- Prix: '+price,
            [
              {
                text: "Annuler",
                onPress: () => console.log("cancel"),
                style: "cancel"
              },
              { text: "Enregistrer", onPress: () => console.log("save") }
            ]
          );
    }
    return (
        <View style={{ flex: 1 }}>
            <View style={{ height: '35%' }} >
                <View  >
                    <HeaderImageComponent backAction={backAction} params={params}/>
                    <ScrollListComponent data={data} />
                </View>

            </View>
            <View style={{ height: '62%', marginVertical: 5, padding: 5, }} >
                <ListCardDetailComponent data={list} action={commander} />
            </View>
        </View> 
    )
}