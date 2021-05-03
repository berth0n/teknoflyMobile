// In App.js in a new project

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { StatusBar } from 'react-native';
import { AEmporterScreen } from '../screen/AEmporterScreen';
import { HomeScreen } from '../screen/HomeScreen';
import { LivraisonScreen } from '../screen/LivraisonScreen';
import { LoginScreen } from '../screen/LoginScreen';
import { screenOptions } from './options';



const Stack = createStackNavigator();

function Navigation() {
    return (
        <NavigationContainer>
            <StatusBar hidden={false} backgroundColor='transparent'  />
            <Stack.Navigator screenOptions={screenOptions}>
                <Stack.Screen name="Livraison" component={LivraisonScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="AEmporter" component={AEmporterScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;