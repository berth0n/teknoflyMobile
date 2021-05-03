import React from 'react';
import { Image, ImageBackground, ScrollView, View, Text } from 'react-native';
import { ButtonComponent } from '../ButtonComponent';
import { styles } from './styles';
import { DrawerNavigatorItems } from 'react-navigation-drawer';
const LABEL_CONNEXION = 'Connexion';
const LABEL_DECONNEXION = 'Déconnexion';
const LABEL_CREATE_ACCOUNT = 'Creer un compte'
export const SidebarComponent = (props: any) => {
    const action = () => { }
    return (
        <ScrollView>

            <ImageBackground
                source={require('../../../assets/images/background/frites.jpg')}
                style={styles.background}
            >
                <Image
                    source={require('../../../assets/images/profil/profil_orange.jpg')}
                    style={styles.profile}
                >

                </Image>
                <View style={styles.textContainer}>
                    <Text style={styles.textPrimary}>Bonjour</Text>
                    <Text style={styles.textSecondary}>Rado</Text>
                </View>
            </ImageBackground>
            <View style={styles.buttons}>
                <View>
                    <ButtonComponent label={LABEL_DECONNEXION} action={action} />
                </View>
                <View>
                    <ButtonComponent type='primary' label={LABEL_CREATE_ACCOUNT} action={action} />
                </View>

            </View>
            <View style={styles.menu}>
                <DrawerNavigatorItems {...props} />
            </View>
        </ScrollView>
    )
}
