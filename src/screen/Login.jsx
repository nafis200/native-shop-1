


import { View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Alert,Button } from "react-native";
import React, {useState} from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.signup}>Login Screen</Text>
      <TextInput
        placeholder="Email"
        style={styles.inputBox}
        value={email}
        onChangeText={value => setEmail(value)}
      />
      <TextInput
        placeholder="Password"
        style={styles.inputBox}
        value={password}
        onChangeText={value => setPassword(value)}
      />
      <TouchableOpacity style={styles.register}>
        <Text style={styles.registerTitle}>Login</Text>
      </TouchableOpacity>
      <View style={{padding:5}}>
      <Button title="Google Sign in" />
    </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
    container: {
      padding: 16,
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
    },
    inputBox: {
      borderWidth: 1,
      borderColor: 'grey',
      paddingHorizontal: 12,
      borderRadius: 5,
      width: '90%',
      marginTop: 20,
    },
    register: {
      width: '90%',
      backgroundColor: '#FCAF03',
      padding: 12,
      borderRadius: 30,
      alignItems: 'center',
      marginTop: 40,
    },
    registerTitle: {
      fontSize: 16,
      color: '#000000',
      fontWeight: '600',
    },
    signup: {
      fontSize: 20,
      color: '#000000',
      fontWeight: '600',
      marginBottom: 80,
    },
  });
  