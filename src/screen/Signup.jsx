
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import RNRestart from 'react-native-restart';
import { AuthContext } from '../components/provider/Authprovider';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {createUser,logout} = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await logout();
      console.log('User signed out successfully');
    } catch (error) {
      console.log('Logout Error:', error);
    }
  };

  const onRegister = async () => {
    try {
      const result = await createUser(email, password); 

      if (auth().currentUser) { 
        await auth().currentUser.updateProfile({
          displayName: 'nafis',
          photoURL: 'https://my-cdn.com/assets/user/123.png',
        });
        Alert.alert(
          "Alert Title",
          "This is a simple alert message", 
          [
            { text: "OK", onPress: () => console.log("OK Pressed") } 
          ]
        );
        RNRestart.Restart(); 
      }
    } 
    catch (error) {
      console.log('Registration Error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.signup}>Sign Up Screen</Text>
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
        secureTextEntry
        onChangeText={value => setPassword(value)}
      />
      <TouchableOpacity onPress={onRegister} style={styles.register}>
        <Text style={styles.registerTitle}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={ handleLogout} style={styles.register}>
        <Text style={styles.registerTitle}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

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
    color:'black'
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

export default Signup;
