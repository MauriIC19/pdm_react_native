import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CustomInput from './components/CustomInput';
import CustomButton from './components/CustomButton';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.header_container}>
        <Text style={styles.header_text}>Hola Mundo</Text>
      </View>

      <View style={styles.login_container}>
        <CustomInput icon={"user"} placeholder={"Usuario..."} secure={false} />
        <CustomInput icon={"lock"} placeholder={"Contraseña..."} secure={true} />
        <CustomButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header_container: {
    flex: 1, 
    backgroundColor: 'black', 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  header_text: {
    fontSize: 90, 
    fontWeight: 'bold', 
    color: 'white'
  },
  login_container: {
    flex: 1, 
    justifyContent: 'flex-start', 
    alignItems: 'center', 
    paddingTop: 40
  }
});
