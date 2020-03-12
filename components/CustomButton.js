import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function CustomInput(props) {
  return ( 
      <TouchableOpacity style={styles.button_container} onPress={props.action}>
        <Text style={{color:'white', fontSize: 22}}>Iniciar sesión</Text>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    button_container: {
      width: 230,
      height: 50,
      backgroundColor: 'black',
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20
    }
  });