import { View, Text } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const Card = ({card,index}) => {
  return (
    <View className={`w-[97%] h-28 flex items-center rounded-t-[20px]  ${index == -1 ? 'mt-0' : 'mt-[-15]'} `} style={{backgroundColor:card.color}}>

      <View className="w-full mt-2 ml-2  flex flex-row justify-around items-center h-16">

        <View className="w-[20%] ">
         <View className="w-10 h-10 rounded-full bg-black"></View>
        </View>

        <View className="w-[60%]  ">
        <Text className="text-xl font-semibold" style={{fontFamily:"outfitB"}}>{card.type}</Text>
        <Text className="text-md font-medium" style={{fontFamily:"robotoR"}}>{card.title}</Text>
        </View>

        <View className="w-[20%] ">
        <MaterialCommunityIcons name='content-copy' size={24}  color={"#1f294d"} className="text-right pr-2"/>
        </View>

      </View>
    </View>
  )
}

export default Card