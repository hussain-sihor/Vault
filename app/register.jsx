import React from 'react'
import { Link, Redirect, useNavigation } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, TextInput, Button, View, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
const register = () => {
  const navigation = useNavigation();
  return (
      <SafeAreaView>
    
          <StatusBar style="dark" backgroundColor="#dbd9fe"></StatusBar>
    
          <View className="flex w-full h-full bg-SECONDARY pt-10 gap-12">
            {/* INPUTS */}
            <View className="flex justify-start items-center w-full bg-PRIMARY gap-6 h-full rounded-tl-[80px] rounded-tr-[80px]">
              <View>
              <Text className="mt-5 font-semibold text-2xl text-center" style={{fontFamily:'robotoB'}}>Register</Text>
                <Text className=" font-medium text-md text-center text-slate-600">Sign up to protect what matters</Text>
              </View>
    
              <KeyboardAvoidingView className=" w-[90%] mt-[20px] h-[85%] flex gap-8 ">
    
                <View className="flex gap-2">
                  <Text style={{fontFamily:'robotoR'}} className="text-slate-800 font-semibold">Name</Text>
                  <TextInput
                    placeholder="Enter your name"
                    className="bg-SECONDARY rounded-xl pl-2"
                  ></TextInput>
                </View>

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
                    placeholder="Set your password"
                    className="bg-SECONDARY rounded-xl pl-2"
                  ></TextInput>
                </View>
    
                <View className="flex w-full justify-center items-center  pt-10">
                  <TouchableOpacity className="bg-TERTIARY pl-[80px] pr-[80px] pt-4 pb-4 rounded-xl">
                    <Text className="text-white font-semibold text-xl " onPress={()=>{navigation.navigate("(tabs)")}}>Register</Text>
                  </TouchableOpacity>
                  <Text className="mt-4">Already have an account? <Link href={"/register"} className='text-TERTIARY text-lg underline font-medium '>LogIn</Link></Text>
                </View>
              </KeyboardAvoidingView>
            </View>
          </View>
        </SafeAreaView>
  )
}

export default register