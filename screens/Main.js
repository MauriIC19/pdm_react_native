import React, { useState, useEffect } from 'react';
import { View, Text, Button, AsyncStorage } from 'react-native';

import { useAuth } from '../auth/AuthContext';

export default function Main() {
    const { signOut } = useAuth();
    const [user, setUser] = useState('');

    useEffect(() => {
        const getUser = async () => {
            let user = await AsyncStorage.getItem('user');
            setUser(JSON.parse(user));
        }
        getUser();
    }, []);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Bienvenido, {user.username}</Text>
            <Button title="Salir" onPress={signOut} />
        </View>
    );
}