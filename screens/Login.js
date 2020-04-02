import React, { useState, useContext } from 'react';
import {
  StyleSheet, Text, View,
  KeyboardAvoidingView, StatusBar, AsyncStorage
} from 'react-native';

import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { useAuth } from '../auth/Context'

export default function Login() {
  const { signIn } = useAuth();

  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const login = async () => {
    const user_data = {
      user: user,
      pass: pass
    }
    try {
      await AsyncStorage.setItem("user", JSON.stringify(user_data));
      let user_stored = await AsyncStorage.getItem("user");
      user_stored = JSON.parse(user_stored);
      console.log(user_stored);
    }
    catch (e) {
      console.error(e);
    }
  }

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

        <CustomButton action={signIn} />
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