import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import Slider from '@react-native-community/slider';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Clipboard from 'expo-clipboard';


const passkey = () => {

  const [numbers,setNumbers] = useState(10);
  const [letters,setLetters] = useState(10);
  const [symbols,setSymbols] = useState(10);
  const [password,setPassword] = useState("");
  

  useEffect(()=>{
    onGenerate();
  },[])

  const onGenerate = () =>{
    let total = numbers+letters+symbols;
    let ans = "";
    const MyLetters = [
      'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 
      'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
      'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
      'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ]
    const mySymbols = [
      '@', '#', '$', '%', '&'
    ]
    const myNumbers =[
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9
    ]
    for(let i=0 ; i<numbers ; i++){
      let num =Math.floor(Math.random()*10)
      // console.log(myNumbers[num]);
      ans = ans+myNumbers[num];
    }
    for(let i=0 ; i<symbols ; i++){
      let len = mySymbols.length;
      let num =Math.floor(Math.random()*len)
      // console.log(myNumbers[num]);
      ans = ans+mySymbols[num];
    }
    for(let i=0 ; i<letters ; i++){
      let len = MyLetters.length;
      let num =Math.floor(Math.random()*len)
      // console.log(myNumbers[num]);
      ans = ans+MyLetters[num];
    }

    const charArray = ans.split('');
    

    for (let i = charArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [charArray[i], charArray[j]] = [charArray[j], charArray[i]];
    }
    
    for (let i = charArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [charArray[i], charArray[j]] = [charArray[j], charArray[i]];
    }
    
    ans =  charArray.join('');
    setPassword(ans);   
  }
  
  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(password);
   console.log("helllll");
};

  return (
		<SafeAreaView className="bg-PRIMARY">

			<Header name={"none"} title={"PassKey"} />

			<View className="w-full flex justify-center items-center mt-10 ">
				<View className=" w-[90%] flex justify-around items-center flex-col gap-3">

					<View className=" w-full pl-2 rounded-lg border-2 border-TERTIARY">
						<Text className="text-lg font-semibold" style={{fontFamily:"robotoB"}}>Letters: <Text className="text-xl">{letters}</Text></Text>

						<Slider
							style={{ width: 300, height: 40 }}
							minimumValue={0}
							maximumValue={10}
							minimumTrackTintColor="#1f294d"
							maximumTrackTintColor="#b1adfd"
              thumbTintColor="#1f294d"
              value={letters}
              onSlidingComplete={(val)=>setLetters(val)}
              step={1}
						/>
					</View>

					<View className=" w-full pl-2 rounded-lg border-2 border-TERTIARY">
          <Text className="text-lg font-semibold" style={{fontFamily:"robotoB"}}>Numbers: <Text className="text-xl">{numbers}</Text></Text>

						<Slider
							style={{ width: 300, height: 40 }}
							minimumValue={0}
							maximumValue={10}
							minimumTrackTintColor="#1f294d"
							maximumTrackTintColor="#b1adfd"
              thumbTintColor="#1f294d"
              value={numbers}
              // onValueChange={(val)=>setLetters(val)}
              onSlidingComplete={(val)=>setNumbers(val)}
              step={1}
						/>
					</View>

					<View className=" w-full pl-2 rounded-lg border-2 border-TERTIARY">
          <Text className="text-lg font-semibold" style={{fontFamily:"robotoB"}}>Symbols: <Text className="text-xl">{symbols}</Text></Text>

						<Slider
							style={{ width: 300, height: 40 }}
							minimumValue={0}
							maximumValue={10}
							minimumTrackTintColor="#1f294d"
							maximumTrackTintColor="#b1adfd"
              thumbTintColor="#1f294d"
              value={symbols}
              // onValueChange={(val)=>setLetters(val)}
              onSlidingComplete={(val)=>setSymbols(val)}
              step={1}
						/>
					</View>


			
					
				</View>
        <View className="w-full flex items-center mt-10">
          <TouchableOpacity className="w-[70%] pl-4 pr-4 pt-2 pb-2 flex justify-center items-center bg-TERTIARY rounded-lg" onPress={onGenerate}>
            <Text className="text-xl font-semibold text-PRIMARY">Generate</Text>
          </TouchableOpacity>
        </View>
			</View>


      <View className="w-full flex  justify-center items-center  mt-[70px]">

        <View className="flex justify-start items-center p-2 w-[90%]  h-40 border-2 border-TERTIARY rounded-lg bg-SECONDARY">

         <View className="w-full  flex justify-center items-end ">
         <TouchableOpacity className=" flex justify-center items-center" onPress={copyToClipboard}>
         <MaterialCommunityIcons name="content-copy" color={"#1f294d"} size={28}/>
          </TouchableOpacity>
         </View>

         <View className="w-full flex justify-start items-center pt-2 pb-2 h-full mt-5">
          <Text className="text-xl font-bold">{password}</Text>
         </View>
        </View>
      </View>
		</SafeAreaView>
	);
}

export default passkey