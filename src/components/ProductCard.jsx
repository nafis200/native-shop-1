

import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'

const ProductCard = ({item,handleLiked}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.coverImage} source={{uri: item?.image}} />
      <Text style={styles.title}>{item?.title}</Text>
      <Text style={styles.price}>${item.price}</Text>
      <TouchableOpacity onPress={()=>{
            handleLiked(item)
      }} style={styles.likeContainer}>
        {
         item?.isLiked ? <AntDesign name={"heart"} size={20} color={"red"} /> : <AntDesign name={"hearto"} size={20} color={"red"} />
      }
      </TouchableOpacity>

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