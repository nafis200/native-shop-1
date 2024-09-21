

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LinearGradient from 'react-native-linear-gradient'
import Header from "../components/Header";


const Cartscreen = () => {
  return (
    <LinearGradient colors={['#FDF0F3','#FFFBFC']} style={styles.conatiner}>
     
     <Header isCart={true} />
 
    </LinearGradient>
  );
};

export default Cartscreen;

const styles = StyleSheet.create({
  
    conatiner:{
        flex:1, 
        padding:15
    },


});
