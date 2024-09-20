
import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const ProductCard = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.coverImage} source={require('../assets/girl1.png')} />
    </View>
  )
}

export default ProductCard

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginLeft:5
},
  coverImage:{
    height:256,
    width:"100%",
    borderRadius:20,
    marginVertical:10,
},
})