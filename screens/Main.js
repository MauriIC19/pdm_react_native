import React from 'react';
import { View, Text, Button } from 'react-native';

import { useAuth } from '../auth/AuthContext';

export default function Main() {
    const { signOut, user } = useAuth();
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Bienvenido, {user && user.username}</Text>
            <Button title="Salir" onPress={signOut} />
        </View>
    );
}