import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../components/Header'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const home = () => {
  return (
		<SafeAreaView className="bg-PRIMARY">
			<Header name={"Hussain"} title={"none"} />
			<View className="w-full h-full flex justify-start items-center bg-PRIMARY pt-12">
				<View className=" w-[80%] h-[30%] flex justify-center items-start gap-3">
					<View className=" w-full">
						<Text
							className="text-left text-6xl font-semibold color-TERTIARY"
							style={{ fontFamily: "outfitB" }}
						>
							Keep
						</Text>
					</View>
					<View className=" w-full">
						<Text
							className="text-center text-6xl font-semibold color-TERTIARY"
							style={{ fontFamily: "outfitB" }}
						>
							Your Life
						</Text>
					</View>
					<View className=" w-full flex flex-row items-center">
						<Text
							className="text-left text-6xl font-semibold color-TERTIARY"
							style={{ fontFamily: "outfitB" }}
						>
							Safe
						</Text>
						<MaterialCommunityIcons
							name="safe"
							size={40}
							color={"#1f294d"}
							className="ml-2"
						/>
					</View>
				</View>
				<View className="w-[90%] h-full  flex justify-start items-center">
					{/* <ImageBackground source={require("../../assets/images/background.webp") } className="w-full h-40 rounded-xl">
        <View className="w-full h-40 rounded-xl flex justify-center items-center bg-yellow-200 opacity-10">
        <Text className="text-2xl font-semibold text-white" style={{fontFamily:"outfitB"}}>Total password stored:</Text>
        <Text className="text-center text-2xl font-bold text-white" style={{fontFamily:"outfitB"}}>123</Text>
        </View>
        
        </ImageBackground> */}

					<View className="w-full h-40 rounded-xl flex justify-center items-center bg-SECONDARY mt-20 shadow-TERTIARY shadow-2xl border-2 border-TERTIARY">
						<View className=" flex justify-center items-center ">
							<Text
								className="text-2xl font-semibold "
								style={{ fontFamily: "outfitB" }}
							>
								Total password stored:
							</Text>
							<Text
								className="text-center text-3xl font-bold "
								style={{ fontFamily: "outfitB" }}
							>
								123
							</Text>
						</View>
					</View>
				</View>
			</View>
		</SafeAreaView>
	);
}

export default home