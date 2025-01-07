import {
	View,
	Text,
	ImageBackground,
	TextInput,
	StyleSheet,
	FlatList,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Card from "../../components/Card";
const vault = () => {
	const cards = [
		{ id: 1, type: "Person", title: "John B Cooper", password:"123452111", color: "#f8b4d9" },
		{
			id: 2,
			type: "Home",
			title: "4470 Katella Ave, Los Alamitos",
			password:"123452111",
			color: "#94d2e6",
		},
		{ id: 3, type: "Visa", title: "**** 0798", password:"123452111", color: "#c2f5c1" },
		{ id: 4, type: "MasterCard", title: "**** 4621", password:"123452111", color: "#f7d3aa" },
		{
			id: 5,
			type: "American Express Gold",
			title: "**** 4621",
			password:"123452111",
			color: "#f7c9f0",
		},
		{ id: 6, type: "Discover it", title: "**** 4621", password:"123452111", color:"#94d2e6" },
		{ id: 7, type: "Person", title: "John B Cooper", password:"123452111", color: "#f8b4d9" },
		{
			id: 8,
			type: "Home",
			title: "4470 Katella Ave, Los Alamitos",
			password:"123452111",
			color: "#94d2e6",
		},
		{ id: 9, type: "Visa", title: "**** 0798", password:"123452111", color: "#c2f5c1" },
		{ id: 10, type: "MasterCard", title: "**** 4621", password:"123452111", color: "#f7d3aa" },
		{
			id: 11,
			type: "American Express Gold",
			title: "**** 4621",
			password:"123452111",
			color: "#f7c9f0",
		},
		{ id: 12, type: "Discover it", title: "**** 4621", password:"123452111", color: "#94d2e6" },
	];
  
  return (
		<SafeAreaView className="bg-PRIMARY">
			<Header name={"none"} title={"Vault"} />

			<View className="flex justify-center items-center w-full absolute top-[80px] h-[70px]">
				<TextInput
					className="p-2 bg-slate-100 rounded-xl w-[85%] border-[1px] border-TERTIARY"
					placeholder="Search here..."
				></TextInput>
			</View>

        
				<View className="w-full flex justify-start items-center mt-[45px]  h-[80%] ">
        <FlatList
				data={cards}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item, index }) => (
					
          <Card card ={item} index={index}/>
          
				)}
				contentContainerStyle={{ padding: 20, alignItems:"center"}}
				showsVerticalScrollIndicator={false}
			/>
        </View>

		</SafeAreaView>
	);
};

export default vault;

const styles = StyleSheet.create({});
