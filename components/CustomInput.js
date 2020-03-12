import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

import Icon from '@expo/vector-icons/FontAwesome';

export default function CustomInput(props) {
    return (
        <View style={styles.input_container}>
            <Icon name={props.icon} size={20} />
            <TextInput 
                style={styles.input} 
                placeholder={props.placeholder} 
                secureTextEntry={props.password}
                onChangeText={props.action}/>
        </View>
    );
}

const styles = StyleSheet.create({
    input_container: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 1,
        padding: 5,
        marginTop: 10
    },
    input: {
        height: 40,
        fontSize: 20,
        marginLeft: 10
    },
});