import React from 'react';
import { View, Text, Button } from 'react-native';

import { useAuth } from '../auth/Context';


export default function Main() {

    const { signOut } = useAuth();
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Estás dentro de Main</Text>
            <Button title="Salir" onPress={signOut} />
        </View>
    );
}