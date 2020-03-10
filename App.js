import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CustomInput from './components/CustomInput';
import CustomButton  from './components/CustomButton';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola mundo</Text>
      
      <CustomInput icon={"user"} placeholder={"Usuario..."} secure={false}/>
      <CustomInput icon={"lock"} placeholder={"Contraseña..."} secure={true}/>
      
      <CustomButton/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
