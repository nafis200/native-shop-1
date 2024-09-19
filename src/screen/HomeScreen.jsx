

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';
const HomeScreen = () => {
  return (
    <LinearGradient colors={['#FDF0F3','#FFFBFC']} style={styles.conatiner}>
      <Header/>
    </LinearGradient>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    conatiner:{
        flex: 1,
    }
})