import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/Login';
import Main from '../screens/Main';
import Loading from '../screens/Loading';

import { useAuth } from '../auth/AuthContext';

const Stack = createStackNavigator();

export default function AuthNavigator() {

    const auth = useAuth();

    if (auth.isLoading) {
        return (
            <Loading />
        );
    }

    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="none">
                {
                    auth.user == null ? 
                    (<Stack.Screen name="Login" component={Login} />) :
                    (<Stack.Screen name="Main" component={Main} />)
                }
            </Stack.Navigator>
        </NavigationContainer>
    );
}