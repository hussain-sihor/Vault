import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { FontAwesome6,Ionicons,MaterialIcons,FontAwesome } from '@expo/vector-icons'
import { useFonts } from 'expo-font';
const TabLayout = () => {

  useFonts({
    outfitB: require('../../assets/fonts/Outfit-Bold.ttf'),
    outfitR: require('../../assets/fonts/Outfit-Regular.ttf'),
    robotoB: require('../../assets/fonts/RobotoCondensed-Bold.ttf'),
    robotoR: require('../../assets/fonts/RobotoCondensed-Regular.ttf')
  })
  return (
    <Tabs screenOptions={{tabBarStyle:{backgroundColor:"#dbd9fe",position:"absolute",}}}>
      <Tabs.Screen name="home" 
      options={{ 
        headerShown: false,
        title:"Home",
        tabBarIcon:({color})=>(
          <Ionicons size={28} name="home"/>
        ),
        tabBarLabelStyle: {
          fontSize: 11,
          fontFamily: 'robotoR',
          fontWeight: 400,
        },
        tabBarActiveTintColor:"#5275f0",
        tabBarInactiveTintColor:"black"
        }}/>

      <Tabs.Screen name="vault"
      options={{ 
        headerShown: false,
        title:"Vault",
        tabBarIcon:({color})=>(
          <MaterialIcons size={28} name="storage"/>
        ),
        tabBarLabelStyle: {
          fontSize: 11,
          fontFamily: 'robotoR',
          fontWeight: 400,
        },
         tabBarActiveTintColor:"#5275f0",
        tabBarInactiveTintColor:"black"
        }} />

      <Tabs.Screen name="add" 
      options={{ 
        headerShown: false,
        title:"",
        tabBarIcon:({color})=>{
          return(
            <View className="w-16 h-16 rounded-full bg-TERTIARY flex justify-center items-center">
          <MaterialIcons size={36} name="add" color={"#f5f5ff"}/>
            </View>
          )
        },
        }} 
      />

      <Tabs.Screen name="passkey" 
      options={{ 
        headerShown: false,
        title:"Create",
        tabBarIcon:({color})=>(
          <MaterialIcons size={28} name="create"/>
        ),
        tabBarLabelStyle: {
          fontSize: 11,
          fontFamily: 'robotoR',
          fontWeight: 400,
        },
         tabBarActiveTintColor:"#5275f0",
        tabBarInactiveTintColor:"black"
        }} 
      />

      <Tabs.Screen name="profile" 
      options={{ 
        headerShown: false,
        title:"Profile",
        tabBarIcon:({color})=>(
          <FontAwesome size={28} name="user-circle-o"/>
        ),
        tabBarLabelStyle: {
          fontSize: 11,
          fontFamily: 'robotoR',
          fontWeight: 400,
        },
         tabBarActiveTintColor:"#5275f0",
        tabBarInactiveTintColor:"black"
        }} />
    </Tabs>
  )
}

export default TabLayout