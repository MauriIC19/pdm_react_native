import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, KeyboardAvoidingView } from 'react-native';

import CustomInput from './components/CustomInput';
import CustomButton from './components/CustomButton';

export default function App() {

  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const login = () => {
    console.log(user);
    console.log(pass);
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View style={styles.header_container}>
        <Text style={styles.header_text}>
          Hola, {user == '' ? "Mundo" : user}
        </Text>
      </View>
      <KeyboardAvoidingView style={styles.login_container} behavior={"padding"} enabled>
        <CustomInput
          icon={"user"}
          placeholder={"Usuario..."}
          secure={false}
          action={setUser} />
        <CustomInput 
          icon={"lock"} 
          placeholder={"Contraseña..."} 
          secure={true} 
          action={setPass}/>
        <CustomButton action={login}/>
      </KeyboardAvoidingView>
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
