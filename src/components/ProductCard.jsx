
import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'

const ProductCard = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.coverImage} source={require('../assets/girl1.png')} />
      <Text style={styles.title}>Jacket Jeans</Text>
      <Text style={styles.price}>$119.0</Text>
    
      <View style={styles.likeContainer}>
      <AntDesign name={"hearto"} size={20} color={"red"} />
      </View>

    </View>
  )
}

export default ProductCard

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginLeft:5,
    position:'relative'
},
  coverImage:{
    height:256,
    width:"100%",
    borderRadius:20,
    marginVertical:10,
},
title:{
  color:'black',
  fontSize:18, 
  fontWeight:'600'
},
price:{
  fontSize:18,
  color:"#9C9C9C",
  fontWeight:'600'
},
likeContainer:{
  height:34,
  width:34, 
  backgroundColor:'white',
  justifyContent:'center',
  alignItems:'center',
  borderRadius:17,
  position:'absolute',
  top:20,
  right:10, 
}
})