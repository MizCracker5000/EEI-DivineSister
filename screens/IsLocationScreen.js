import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  StatusBar,
  SafeAreaView,
} from "react-native";
import MapView from "react-native-maps";

// Diego crea su primer componente
const IsLocationScreen = (props) => {
  // aqui va todo lo que va a tener mi componente
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.droidSafeArea} />
      <ImageBackground
        source={require("../assets/bg.png")}
        style={styles.backgroundImage}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Divine Location of EEI</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  // aquiiiiiiiiiiiiiii
  container: {
    flex: 1,
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  // aquiiiiii
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
});
export default IsLocationScreen;
