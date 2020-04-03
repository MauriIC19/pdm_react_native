import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AppNavigator from './AppNavigator';

import Login from '../screens/Login';
import Loading from '../screens/Loading';

import { useAuth } from '../auth/AuthContext';

const Stack = createStackNavigator();

export default function AuthNavigator() {

    const { isLoading, user } = useAuth();

    if (isLoading) {
        return (
            <Loading />
        );
    }

    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="none">
                {
                    user == null ?
                        (<Stack.Screen name="Login" component={Login} />) :
                        (<Stack.Screen name="App" component={AppNavigator} />)
                }
            </Stack.Navigator>
        </NavigationContainer>
    );
}