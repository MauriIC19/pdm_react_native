import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import Icon from "@expo/vector-icons/FontAwesome";

export default function CustomInput(props) {
    return (
        <View style={styles.input_container}>
            <Icon style={styles.input_icon} name={props.icon} size={30} color={"rgba(0, 0, 0, 0.4)"} />
            <TextInput 
                style={styles.input} 
                placeholder={props.placeholder} 
                secureTextEntry={props.secure}
                onChangeText={props.action}/>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        width: "90%",
        height: 40,
        fontSize: 20,
        marginLeft: 10
    },
    input_container: {
        marginTop: 20,
        width: "90%",
        flexDirection: "row",
        alignItems: 'center',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        padding: 5
    },
    input_icon: {
        marginLeft: 10
    }
});

