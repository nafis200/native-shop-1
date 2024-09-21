import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage"


export const CartContext = createContext() 


export const CartProvider = ({children})=>{
    const [carts,setCarts] = useState([1,2,3]);
    
    const value = {
        carts,
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );

}