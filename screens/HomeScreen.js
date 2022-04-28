import React from "react";
import {StyleSheet, Text, View, SafeAreaView, TouchableOpacity, StatusBar, } from "react-native";

// Diego crea su primer componente 
const HomeScreen =()=>{
  // aqui va todo lo que va a tener mi componente
  return(
    <View
    style={{flex:1, justifyContent: "center", alignItems:"center"}}
    >
      <SafeAreaView style={styles.droidSafeAreView}/>
      <View style={styles.titleBar}>
        <Text>Rastreador de la EEI</Text>
         </View> 
    </View>
  )

}

const styles = StyleSheet.create({
  container:{
    flex:1,
  }, 
  droidSafeAreView:{
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight:0
  }
})

export default HomeScreen;