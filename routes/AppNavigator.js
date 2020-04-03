import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from '../screens/Main';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Main} />
            <Tab.Screen name="Settings" component={Main} />
        </Tab.Navigator>
    );
}
