
import React, { createContext, useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
export const AuthContext = createContext()

const Authprovider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  GoogleSignin.configure({
    webClientId: '175986965000-j7iunrcvgliqr5fduufj47olbv3tp95a.apps.googleusercontent.com',
  });

  const signInWithGoogle = async () => {
    try {
      const { idToken } = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      await auth().signInWithCredential(googleCredential);
    } catch (error) {
      console.error('Google Sign-In Error:', error);
      throw error;
    }
  };

  const createUser = async (email, password) => {
    try {
      await auth().createUserWithEmailAndPassword(email, password)
      .then((result)=>{
         console.log(result);
         
      })
    } catch (error) {
      console.error('Registration Error:', error);
      throw error;
    }
  };
  const signInUser = async (email, password) => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.error('Login Error:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await auth().signOut();
    } catch (error) {
      console.error('Logout Error:', error);
    }
  };
  
  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    logout,
    signInWithGoogle
  }

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default Authprovider;