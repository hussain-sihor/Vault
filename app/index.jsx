import React from 'react'
import { Link, Redirect, useNavigation } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, TextInput, Button, View, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
const index = () => {
  const authCompleted = ()=>{
  //  <Redirect href={'/home'}/>
      navigation.navigate("(tabs)");
   }
   const navigation = useNavigation();

  return (
		<SafeAreaView>

			<StatusBar style="dark" backgroundColor="#dbd9fe"></StatusBar>

			<View className="flex w-full h-full bg-SECONDARY pt-10 gap-12">

				{/* LOGO */}
				<View className="flex items-center w-full">
					<View className="bg-PRIMARY h-52 rounded-full w-52 flex justify-center items-center border-TERTIARY border-2 elevation-2xl ">
						<Image 
						source={require("../assets/images/lock.png")}
						className="w-48 h-48"
						/>
					</View>
				</View>

				{/* INPUTS */}
				<View className="flex justify-start items-center w-full bg-PRIMARY gap-6 h-full rounded-tl-[80px] rounded-tr-[80px]">
					<Text className="mt-5 font-semibold text-2xl" style={{fontFamily:'robotoB'}}>Sign In</Text>

					<KeyboardAvoidingView className=" w-[90%] mt-[20px] h-[85%] flex gap-8 ">

						<View className="flex gap-2">
							<Text style={{fontFamily:'robotoR'}} className="text-slate-800 font-semibold">Email Address</Text>
							<TextInput
								placeholder="Enter your email"
								className="bg-SECONDARY rounded-xl pl-2"
							></TextInput>
						</View>

						<View className="flex gap-2">
							<Text style={{fontFamily:'robotoR'}} className="text-slate-800 font-semibold">Password</Text>
							<TextInput
								placeholder="Enter your password"
								className="bg-SECONDARY rounded-xl pl-2"
							></TextInput>
						</View>

						<View className="flex w-full justify-center items-center  pt-10">
							<TouchableOpacity className="bg-TERTIARY pl-[80px] pr-[80px] pt-4 pb-4 rounded-xl" onPress={()=>{ navigation.navigate("(tabs)");}}>
								
								<Text className="text-white font-semibold text-xl ">Login</Text>
							</TouchableOpacity>
							<Text className="mt-4">Don't have an account? <Link href={"/register"} className='text-TERTIARY text-lg underline font-medium '>Sign up</Link></Text>
						</View>
					</KeyboardAvoidingView>
				</View>
			</View>
		</SafeAreaView>
	);

}

export default index