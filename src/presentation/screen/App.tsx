import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer';
import { LivraisonScreen } from './LivraisonScreen'
import { AEmporterScreen } from './AEmporterScreen'


const DrawerNavigation = createDrawerNavigator({
    LivraisonScreen,
    AEmporterScreen,
})

export default createAppContainer(DrawerNavigation);