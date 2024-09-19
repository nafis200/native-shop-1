
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screen/HomeScreen';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
const Tab = createBottomTabNavigator();
const Home = ()=>{
   return(
       <View>
          <Text style={{color:'black'}}>Home</Text>
       </View>
   )
}

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator 
       screenOptions={{
          headerShown:false
       }} 
       >
      <Tab.Screen name="Home" component={HomeScreen} options={{
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
      <Tab.Screen name="Cart" component={Home} options={{
           tabBarIcon:({color,size,focused})=>{
              return <MaterialCommunityIcons name={"cart"} color={"red"} size={size}/>
           }
        }} />
      <Tab.Screen name="Account" component={Home} options={{
           tabBarIcon:({color,size,focused})=>{
              return <FontAwesome6 name={'user'} color={"red"} size={size} />
           }
        }} />
    </Tab.Navigator>

    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})