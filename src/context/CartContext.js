
import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage"


export const CartContext = createContext() 


export const CartProvider = ({children})=>{
    const [carts,setCarts] = useState([]);

     const addToCart = (item)=>{
         const itemExist = carts.findIndex((cart)=> cart.id === item.id) 
         if(itemExist === -1){
            setCarts([...carts,item])
         }
     }
    
    const value = {
        carts,
        addToCart
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );

}