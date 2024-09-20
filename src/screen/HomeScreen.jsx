

import { StyleSheet, Text, View,TextInput, FlatList } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';
import Fontisto from 'react-native-vector-icons/Fontisto'
import Category from '../components/Category';
import ProductCard from '../components/ProductCard';
import data from '../data/data.json'
const HomeScreen = () => {
  const categories = ['Tranding Now','All','New','Mens','Womens']
  const [selectedCategory,setSelectedcategory] = useState(null)
  const [isLiked,setIsLiked] = useState(false)
  const [products,setProducts] = useState(data.products)
  return (
    <LinearGradient colors={['#FDF0F3','#FFFBFC']} style={styles.conatiner}>
      <Header/>
      <Text style={styles.matchText}>Match Your Style</Text>
            <View style={styles.inputcontainer}>
           <View style={styles.iconContainer}>
           <Fontisto name={"search"} size={26} color={"#C0C0C0"}
           />
           </View>
           <TextInput style={styles.textinput}
           placeholder="Search"
           placeholderTextColor="#C0C0C0"
           />
       </View>
       
         <FlatList numColumns={2}
         ListHeaderComponent={
           <>
            <FlatList data={categories} renderItem={({item})=> <Category item={item} selectedCategory={selectedCategory} setSelectedcategory={setSelectedcategory}/>} keyExtractor={(item)=>item} horizontal={true}
       showsHorizontalScrollIndicator={false} style={{marginBottom:40}}
       />
          </>
       }
      data={products} renderItem={({item,index})=> <ProductCard item={item} isLiked={isLiked} setIsLiked={setIsLiked}
      />}
      showsVerticalScrollIndicator = {false}
      contentContainerStyle = {{
         paddingBottom: 150,
      }}
      />
      
    </LinearGradient>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    conatiner:{
        flex: 1,
        padding:20
    },
    matchText:{
        fontSize:28,
        color:'black',
        marginTop:20
      },
      textinput:{
        flex: 1,
        color:'black'
    },
    inputcontainer:{
        backgroundColor:'#FFFFFF',
        height:48,
        borderRadius:12,
        alignItems:'center',
        flexDirection:'row',
        marginVertical:20
      },
      iconContainer:{
        marginHorizontal:20,
     }
 
   
})