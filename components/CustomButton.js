import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function CustomInput(props) {
    return (
        <TouchableOpacity style={styles.button_container} onPress={props.action}>
            <Text style={styles.button_text}>Iniciar sesión</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button_container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 230,
        height: 50,
        backgroundColor: 'black',
        borderRadius: 5,
        marginTop: 20
    },
    button_text: {
        color: 'white',
        fontSize: 20
    }
});