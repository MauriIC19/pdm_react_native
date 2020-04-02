import React, { useState } from 'react';
import {
  StyleSheet, Text, View,
  KeyboardAvoidingView, StatusBar
} from 'react-native';

import { useAuth } from '../auth/AuthContext';

import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

export default function Login() {

  const { signIn } = useAuth();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  return (
    <View style={styles.container}>

      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View style={styles.header_container}>
        <Text style={styles.header_text}>
          Hola, {(user == "") ? "Mundo" : user}
        </Text>
      </View>

      <KeyboardAvoidingView style={styles.login_container} behavior={"padding"} enabled>
        <CustomInput
          placeholder={"Usuario..."}
          icon={"user"}
          action={setUser} />

        <CustomInput
          placeholder={"Contraseña..."}
          icon={"lock"}
          password={true}
          action={setPass} />

        <CustomButton action={() => signIn({ username: user, password: pass })} />
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
    color: 'white',
    fontWeight: 'bold'
  },
  login_container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 40
  }
});