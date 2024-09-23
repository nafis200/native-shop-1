



import { StyleSheet, Text, View,TouchableOpacity, FlatList } from "react-native";
import React, { useContext } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Header from "../components/Header";
import Cartcard from "./Cartcard";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../components/provider/Authprovider";
import useAxiospublic from "../components/hooks/useAxiospublic";
import { useQuery } from "@tanstack/react-query";

const Cartscreen = () => {
  const {carts,totalPrice,
    deleteItemFromCart} = useContext(CartContext)
    const {user} = useContext(AuthContext)
    
    const axiosSecure = useAxiospublic()
    
    const {data: userx = []} = useQuery({
        queryKey:['menu'],
        queryFn:async()=>{
            const res = await axiosSecure.get(`/users`)
            return res.data
        } 
    })
   
    console.log("tanstack query",userx);
    


   axiosSecure.get(`/totalvotes`)
  .then((res) => {
    console.log(res.data);
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });

    
    

    
    
  return (
    <LinearGradient colors={['#FDF0F3','#FFFBFC']} style={styles.conatiner}>
     
     <Header isCart={true} />
     {/* <Cartcard/>
     <Cartcard/> */}
     <FlatList data={carts} renderItem={({item})=><Cartcard item={item} deleteItemFromCart={deleteItemFromCart} ></Cartcard>} ListFooterComponent={
         <>        
          <View style={styles.priceContainer}>
<View style={styles.priceAndTitle}>
<Text style={[{color:'black'},styles.text]}>Total: </Text>
<Text style={[{color:'black'},styles.text]}>${totalPrice} </Text>
</View>

<View style={styles.priceAndTitle}>  
<Text style={[{color:'black'},styles.text]}>Shipping: </Text>
<Text style={[{color:'black'},styles.text]}>$0.0: </Text>
</View>
</View>
   
<View style={styles.divider} />
<View style={styles.priceAndTitle}>  
<Text style={[{color:'black'},styles.text]}>Grand Total: </Text>
<Text style={[{color:'black',fontWeight:'700'},styles.text]}>${totalPrice}</Text>
</View>

<TouchableOpacity style={styles.checkoutContainer}>
<Text style={[{color:'black'},styles.buttonText]}>Checkout</Text>    
<Text style={[{color:'black'},styles.buttonText]}>{userx?.length}</Text>    
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