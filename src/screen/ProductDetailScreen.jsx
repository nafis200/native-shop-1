
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useContext, useState } from "react";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation, useRoute } from "@react-navigation/native";
import Header from "../components/Header";

const ImageUrl =
  "https://res.cloudinary.com/dlc5c1ycl/image/upload/v1710567612/qichw3wrcioebkvzudib.png";

  const sizes = ["S", "M", "L", "XL"];

const ProductDetailScreen = () => {

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
        height: 420,
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
    
    
    
});
