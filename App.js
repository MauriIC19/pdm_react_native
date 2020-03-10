import React from 'react';
import {
  StyleSheet, Text, View,
  TouchableOpacity
} from 'react-native';

import CustomInput from './components/CustomInput';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola Mundo</Text>
      
      <CustomInput placeholder={"Usuario..."} icon={"user"} />
      <CustomInput placeholder={"Contraseña..."} icon={"lock"} password={true} />
      
      <TouchableOpacity style={styles.button_container}>
        <Text style={styles.button_text}>Iniciar sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button_container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 210,
    height: 50,
    backgroundColor: 'black',
    borderRadius: 5,
    marginTop: 10
  },
  button_text: {
    color: 'white',
    fontSize: 20
  }
});
