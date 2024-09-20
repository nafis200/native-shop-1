
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useContext, useState } from "react";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation, useRoute } from "@react-navigation/native";
import Header from "../components/Header";

const ImageUrl =
  "https://res.cloudinary.com/dlc5c1ycl/image/upload/v1710567612/qichw3wrcioebkvzudib.png";

  const sizes = ["S", "M", "L", "XL"];

const ProductDetailScreen = () => {
    const [selectedSize, setSelectedSize] = useState(null);

  return (
    <LinearGradient colors={["#FDF0F3", "#FFFBFC"]} style={styles.container}>
     <View style={styles.HeaderContainer}>
        <Header />
      </View>
      <Image source={{ uri: ImageUrl }} style={styles.coverimage} />

      <View style={styles.contentContainer}>
        <Text style={[styles.title, { color: "black" }]}>Jacket cost</Text>
        <Text style={[styles.price, { color: "black" }]}>$990</Text>
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
        height: 320,
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
    
    
    
    
});
