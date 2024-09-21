
import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screen/HomeScreen';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import { createStackNavigator } from '@react-navigation/stack';
import ProductDetailScreen from './src/screen/ProductDetailScreen';
import Cartscreen from './src/screen/Cartscreen';
import { CartContext, CartProvider } from './src/context/CartContext';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Home = ()=>{
   return(
       <View>
          <Text style={{color:'black'}}>Home</Text>
       </View>
   )
}

function MyStack() {
   return (
     <Stack.Navigator  screenOptions={{
      headerShown:false
   }} >
       <Stack.Screen name="Home_Stack" component={HomeScreen} />
       <Stack.Screen name="Product_details" component={ProductDetailScreen} />
     </Stack.Navigator>
   );
 }



const App = () => {
  return (
    <CartProvider>
      <NavigationContainer>
      <Tab.Navigator 
       screenOptions={{
         headerShown:false
      }} 
       >
      <Tab.Screen name="Home" component={MyStack} options={{
           tabBarIcon: ({color,size})=>{
             return <Entypo name={"home"} 
              color={"red"} size={size}
             />
           }
        }}  />
      <Tab.Screen name="Reorder" component={Home} options={{
           tabBarIcon: ({color,size})=>{
             return <MaterialIcons name={"reorder"} 
              color={"red"} size={size}
             />
           }
        }}  />
      <Tab.Screen name="Cart" component={Cartscreen} options={{
           tabBarIcon:({color,size,focused})=>{
            const {carts} = useContext(CartContext)
              return (
                <View>
                <MaterialCommunityIcons name={"cart"} color={"red"} size={size}/>
                <View style={{
              height:18,
              width:14,
              borderRadius:7,
              backgroundColor:'red',
              justifyContent:'center',
              alignItems:'center',
              position:'absolute',
              top:-10,
              right:-5
             }}>
                  <Text style={{color:'white'}}>{carts?.length}</Text>
                </View>
                </View>
              )
           }
        }} />
      <Tab.Screen name="Account" component={Home} options={{
           tabBarIcon:({color,size,focused})=>{
              return <FontAwesome6 name={'user'} color={"red"} size={size} />
           }
        }} />
    </Tab.Navigator>
    </NavigationContainer>
    </CartProvider>
  )
}

export default App

const styles = StyleSheet.create({})