import React from "react";
import {StyleSheet, Text, View} from "react-native";

// Diego crea su primer componente 
const MeteorScreen =()=>{
  // aqui va todo lo que va a tener mi componente
  return(
    <View
    style={{flex:1, justifyContent: "center", alignItems:"center"}}
    >
      <Text>Pantalla de meteoros</Text>
    </View>
  )

}


export default MeteorScreen;