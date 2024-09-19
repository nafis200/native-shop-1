

import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.container}>
       <View>
           <Image source={require('../assets/apps.png')} style={styles.appIconContainer} />
       </View>
       <Image source={require("../assets/Ellipse2.png")} style={styles.appIcon} />

    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    appIconContainer:{
        backgroundColor:'#FFFFFF',
        height:44,
        width:44,
        borderRadius:22,
        justifyContent:'center',
        alignItems:'center',
     },
     appIcon:{
        height:40,
        width:40
    },
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
        },



})