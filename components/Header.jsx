import { Text, View } from "react-native"



import React from 'react'

function Header({name,title}) {
  return(
			<View className="bg-SECONDARY flex w-full h-24 justify-center items-start rounded-b-[40px] pl-8 pr-4 elevation-md border-[1px] border-t-0 border-TERTIARY">
      
      {title == 'none' ? <View>	
        <Text
					className="text-md font-semibold"
					style={{ fontFamily: "robotoR" }}
				>
					Welcome back
				</Text>
				<Text className="text-xl font-bold " style={{ fontFamily: "outfitR" }}>
					{name}
				</Text></View> :
        <View>
          
				<Text className="text-3xl font-bold " style={{ fontFamily: "outfitR" }}>
					{title}
				</Text>
          </View>}
			
        </View>

		
		

  )
  
}

export default Header
