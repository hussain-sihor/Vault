import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import Header from "../../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";

const profile = () => {
	return (
		<SafeAreaView className="bg-PRIMARY">
			<Header name={"none"} title={"Profile"} />

			<View className="w-full flex justify-center items-center h-20  mt-24">

				<View className="w-[85%] flex-row gap-4 justify-center items-center border-2 border-TERTIARY p-2 rounded-lg opacity-80">
					<View className="w-12 h-12 bg-black rounded-full"></View>
					<View>
						<Text
							className="text-left text-2xl font-semibold color-TERTIARY"
							style={{ fontFamily: "outfitB" }}
						>
							Hussain
						</Text>
						<Text
							className="text-left text-xl font-semibold color-TERTIARY"
							style={{ fontFamily: "outfitB" }}
						>
							sihorwalahussain@gmail.com
						</Text>
					</View>
				</View>
			</View>

			<View className="w-full h-full flex justify-start items-center">

				<View className="w-[90%] flex justify-start items-start mt-10 h-full gap-5 pt-24">

					<View className="flex-row gap-2 w-full  items-center border-2 border-black pl-3 pr-3 rounded-xl bg-SECONDARY">
						<Text
							style={{ fontFamily: "robotoB" }}
							className="text-slate-800 font-semibold w-[20%]"
						>
							Name :
						</Text>
						<TextInput
							placeholder="Change your name"
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
							placeholder="Change your email"
							className="Y rounded-xl pl-2 w-[85%]"
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
							placeholder="Change your password"
							className=" rounded-xl pl-2 w-[85%]"
						></TextInput>
					</View>

					<View className="w-full justify-center items-center mt-7">
					<TouchableOpacity
						className="bg-TERTIARY pl-[80px] pr-[80px] pt-4 pb-4 rounded-xl"
						onPress={() => {
							console.log("Helllo");
						}}
					>
						<Text className="text-white font-semibold text-xl ">Save</Text>
					</TouchableOpacity>
					</View>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default profile;
