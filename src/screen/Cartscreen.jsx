



import { StyleSheet, Text, View,TouchableOpacity, FlatList } from "react-native";
import React, { useContext } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Header from "../components/Header";
import Cartcard from "./Cartcard";
import { CartContext } from "../context/CartContext";


const Cartscreen = () => {
  const {carts} = useContext(CartContext)
  return (
    <LinearGradient colors={['#FDF0F3','#FFFBFC']} style={styles.conatiner}>
     
     <Header isCart={true} />
     {/* <Cartcard/>
     <Cartcard/> */}
     <FlatList data={carts} renderItem={({item})=><Cartcard item={item}></Cartcard>} ListFooterComponent={
         <>        
          <View style={styles.priceContainer}>
<View style={styles.priceAndTitle}>
<Text style={[{color:'black'},styles.text]}>Total: </Text>
<Text style={[{color:'black'},styles.text]}>$155 </Text>
</View>

<View style={styles.priceAndTitle}>  
<Text style={[{color:'black'},styles.text]}>Shipping: </Text>
<Text style={[{color:'black'},styles.text]}>$0.0: </Text>
</View>
</View>
   
<View style={styles.divider} />
<View style={styles.priceAndTitle}>  
<Text style={[{color:'black'},styles.text]}>Grand Total: </Text>
<Text style={[{color:'black',fontWeight:'700'},styles.text]}>$100</Text>
</View>

<TouchableOpacity style={styles.checkoutContainer}>
<Text style={[{color:'black'},styles.buttonText]}>Checkout</Text>    
</TouchableOpacity>
         </>
     } />

    </LinearGradient>
  );
};

export default Cartscreen;

const styles = StyleSheet.create({
  
    conatiner:{
        flex:1, 
        padding:15
    },
    priceAndTitle:{
        flexDirection: "row",
        justifyContent:'space-between',
        marginHorizontal:20
    },
    text:{
        fontSize:18,
    },
    divider:{
        borderWidth: 2,
        borderColor:"#C0C0C0",
        marginTop:5,
        marginBottom:5
    },
    buttonText:{
        fontSize:18,
        color:"white",
        textAlign:'center',
        padding:10
    },
    checkoutContainer:{
        backgroundColor:"red",
        width:"100%",
        marginVertical:40,
        borderRadius:20,
    },


});