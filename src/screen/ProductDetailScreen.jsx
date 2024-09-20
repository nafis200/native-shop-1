
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView } from "react-native";
import React, { useContext, useState } from "react";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation, useRoute } from "@react-navigation/native";
import Header from "../components/Header";

const ImageUrl =
  "https://res.cloudinary.com/dlc5c1ycl/image/upload/v1710567612/qichw3wrcioebkvzudib.png";

  const sizes = ["S", "M", "L", "XL"];
  const colorArray = [
    "#FF5733",
    "#33FF57",
    "#3357FF",
    "#F1C40F",
    "#8E44AD",
    "#2ECC71",
  ];


const ProductDetailScreen = () => {
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const route = useRoute()

    const item = route.params.item 
    

  return (
    <LinearGradient colors={["#FDF0F3", "#FFFBFC"]} style={styles.container}>
     <View style={styles.HeaderContainer}>
        <Header />
      </View>
      <Image source={{ uri: item?.image }} style={styles.coverimage} />

      <View style={styles.contentContainer}>
        <Text style={[styles.title, { color: "black" }]}>{item.title}</Text>
        <Text style={[styles.price, { color: "black" }]}>${item.price}</Text>
      </View>
       
      <Text style={[styles.sizetext,styles.title]}>Size</Text>

      <View style={styles.sizeContainer}>
        {
             sizes.map((size,index)=>{
                return(
                    <TouchableOpacity style={styles.sizeValueContainer} key={index} onPress={()=>{
                        setSelectedSize(size)
                    }} >
                    <Text style={[styles.title,styles.sizeValue, selectedSize === size && {color:'red'}]}>{size}</Text>
                    </TouchableOpacity>
                )
             })
        }
      </View>

      <Text style={[styles.sizetext,styles.title,{marginVertical:10}]}>Color</Text>

      <View style={styles.colorContainer}>
        {
            colorArray.map((color,index)=>{
                return(
                    <TouchableOpacity onPress={()=>{
                        setSelectedColor(color)
                    }} >
                       <View style={[styles.circleBorder,selectedColor === color && {borderWidth:1,borderRadius:40}]}>
                       <View key={index} style={[{backgroundColor:color},styles.circle]} />
                       </View>
                    </TouchableOpacity>
                )
            })
        }
      </View>

      <TouchableOpacity style={styles.button}>
       <Text style={[{color:'black'},styles.buttonText]}>Add to Cart</Text>

      </TouchableOpacity>


    </LinearGradient>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      coverimage: {
        width: "100%",
        height: 400,
      },
      HeaderContainer: {
        padding: 20,
      },
      title: {
        fontSize: 20,
        color: "#444444",
      },
      price: {
        fontSize: 20,
        color: "#4D4C4C",
      },
      contentContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 20,
        marginVertical: 20,
      },
      sizetext: {
        marginHorizontal: 20,
        color:'black'
      },
      sizeValue: {
        fontSize: 18,
      },
      sizeValueContainer: {
        height: 36,
        width: 36,
        borderRadius: 18,
        backgroundColor: "white",
        justifyContent:'center',
        alignItems:'center'
      },
      sizeContainer: {
        marginHorizontal: 20,
        flexDirection:'row',
        gap:10,
      },
      colorText: {
        marginHorizontal: 20,
        marginTop: 10,
      },
      circle: {
        height: 36,
        width: 36,
        borderRadius: 18,
      },
      colorContainer: {
        flexDirection: "row",
        marginHorizontal: 10,
        gap: 10,
        marginVertical: 10,
      },
      circleBorder: {
        height: 48,
        width: 48,
        borderRadius: 40,
        alignItems: "center",
        justifyContent: "center",
      },
      buttonText:{
        fontSize:20,
        fontWeight:"600",
        textAlign:'center',
        color:'white'
     },
     button:{
       backgroundColor:"#E96E6E",
       padding:20,
       borderRadius:30,
       marginHorizontal:10,
       marginVertical:40
     }
   
    
    
    
    
});
