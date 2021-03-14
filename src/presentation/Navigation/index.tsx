// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screen/LoginScreen';
import { screenOptions } from './options'
import {StatusBar} from 'react-native'
const Stack = createStackNavigator();

function Navigation() {
    return (
        <NavigationContainer>
            <StatusBar hidden={true} backgroundColor='transparent' barStyle='light-content' />
            <Stack.Navigator screenOptions={screenOptions}>
                <Stack.Screen name="Login" component={LoginScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;