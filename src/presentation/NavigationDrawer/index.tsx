import React from 'react'

import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { SidebarComponent } from '../component/SidebarComponent';
import { LoginScreen } from '../screen/LoginScreen';
import { LivraisonScreen } from '../screen/LivraisonScreen';
import { DetailScreen } from '../screen/DetailScreen';

const DrawerNavigation = createDrawerNavigator({
  Livraiison: { screen: LivraisonScreen },
  Detail: { screen: DetailScreen,  },
  Login: { screen: LoginScreen },
}
  , {
    contentComponent: props => <SidebarComponent {...props} />
  }

)

export default createAppContainer(DrawerNavigation);