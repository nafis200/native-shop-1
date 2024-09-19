

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = () => {
  return (
    <View>
    <Icon.Button
    name="facebook"
    backgroundColor="#3b5998"
  >
    Login with Facebook
  </Icon.Button>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})