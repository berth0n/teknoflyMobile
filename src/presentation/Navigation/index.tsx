// In App.js in a new project

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { StatusBar } from 'react-native';
import { HomeScreen } from '../screen/HomeScreen';
import { LoginScreen } from '../screen/LoginScreen';
import { HeaderTemplate } from '../template/HeaderTemplate';
import { screenOptions } from './options';
const Stack = createStackNavigator();

function Navigation() {
    return (
        <NavigationContainer>
            <StatusBar hidden={true} backgroundColor='white'  />
            <Stack.Navigator screenOptions={screenOptions}>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Header" component={HeaderTemplate} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;