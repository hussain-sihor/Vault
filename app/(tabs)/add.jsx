import { View, Text, TextInput,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const add = () => {

  const [title,setTitle] = useState("Untitled");
  const [titleChange,setTitleChange] = useState(true);
  return (
		<SafeAreaView>
			<View className="bg-SECONDARY flex w-full h-24 justify-center items-start rounded-b-[40px] pl-8 pr-4 elevation-md border-[1px] border-t-0 border-TERTIARY">

        <View className=" w-full flex justify-start items-center gap-6 flex-row">
         
          <View className="bg-black w-10 h-10 rounded-full"></View>

          {titleChange ? <Text className="text-3xl font-bold underline" style={{ fontFamily: "outfitR" }} onPress={()=>{
            console.log("Hell")
            setTitleChange(false)}}>
					{title}
				</Text> :  <TextInput className="w-[80%] text-3xl font-bold h-full" placeholder='App name' value={title} onChangeText={(data)=>setTitle(data)}/>}
				
       

        </View>
			</View>

      <View className="w-full flex justify-start items-center bg-yellow-200 h-full">
        
         <View className="w-[90%] flex justify-end items-start  h-[63%] gap-5 pt-24">

          <View className="flex-row gap-2 w-full  items-center border-2 border-black pl-3 pr-3 rounded-xl bg-SECONDARY">
            <Text
              style={{ fontFamily: "robotoB" }}
              className="text-slate-800 font-semibold w-[20%]"
            >
              Username :
            </Text>
            <TextInput
              placeholder="Enter your username"
              className=" rounded-xl pl-2 w-[85%] "
            ></TextInput>
          </View>

          <View className="flex-row gap-2 w-full items-center border-2 border-black pl-3 pr-3 rounded-xl bg-SECONDARY">
            <Text
              style={{ fontFamily: "robotoB" }}
              className="text-slate-800 font-semibold w-[20%]"
            >
              Email :
            </Text>
            <TextInput
              placeholder="Enter your email id"
              className="Y rounded-xl pl-2 w-[85%]"
            ></TextInput>
          </View>

          <View className="flex-row gap-2 w-full  items-center border-2 border-black pl-3 pr-3 rounded-xl bg-SECONDARY">
            <Text
              style={{ fontFamily: "robotoB" }}
              className="text-slate-800 font-semibold w-[20%]"
            >
              Phone :
            </Text>
            <TextInput
              placeholder="Enter your mobile number"
              className=" rounded-xl pl-2 w-[85%]"
            ></TextInput>
          </View>

          <View className="flex-row gap-2 w-full  items-center border-2 border-black pl-3 pr-3 rounded-xl bg-SECONDARY">
            <Text
              style={{ fontFamily: "robotoB" }}
              className="text-slate-800 font-semibold w-[20%]"
            >
              Password :
            </Text>
            <TextInput
              placeholder="Enter your password"
              className=" rounded-xl pl-2 w-[85%]"
            ></TextInput>
          </View>

          <Text className="text-md font-semibold" style={{fontFamily:"outfitR"}}>* Fill in the required details to remember your account</Text>

          <View className="w-full justify-center items-center mt-10">
          <TouchableOpacity
            className="bg-TERTIARY pl-[80px] pr-[80px] pt-4 pb-4 rounded-xl"
            onPress={() => {
              console.log("Helllo");
            }}
          >
            <Text className="text-white font-semibold text-xl ">Create</Text>
          </TouchableOpacity>
          </View>

          
        </View> 
      </View>
		</SafeAreaView>
	);
}

export default add