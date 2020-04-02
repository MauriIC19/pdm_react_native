import React, { useEffect, useState } from 'react';
import { View, Text, Button, AsyncStorage } from 'react-native';

import { useAuth } from '../auth/Context';


export default function Main() {
    const { signOut } = useAuth();
    [ user, setUser ] = useState('');

    useEffect(() => {
        const getUser = async () => {
            let user = await AsyncStorage.getItem("user");
            setUser(user);
        } 
        getUser();
    }, []);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Estás dentro de Main</Text>
            <Button title="Salir" onPress={signOut} />
        </View>
    );
}