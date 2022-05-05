import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
  Image,
} from "react-native";

// Diego crea su primer componente
const HomeScreen = (props) => {
  // aqui va todo lo que va a tener mi componente
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.droidSafeAreView} />
      <ImageBackground
        source={require("../assets/bg.png")}
        style={styles.backgroundImage}
      >
        <View style={styles.titleBar}>
          {/* agreamos el titulo de la app */}
          <Text style={styles.titleText}>Rastreador de la EEI</Text>
        </View>
        {/*agregamos un TouchableOpacity  */}
        <TouchableOpacity
          style={styles.routeCard}
          onPress={() => props.navigation.navigate("Localización")}
        >
          <Text style={styles.routeText}>Divine Location of EEI </Text>
          <Text style={styles.knowMore}>{"Saber mas ---->"}</Text>
          <Image
            source={require("../assets/iss_icon.png")}
            style={styles.iconImage}
          ></Image>
        </TouchableOpacity>
        {/* agregamos otro boton  */}
        <TouchableOpacity
          style={styles.routeCard}
          onPress={() => props.navigation.navigate("Meteoros")}
        >
          <Text style={styles.routeText}>Unholy Meteors</Text>
          <Text style={styles.knowMore}>{"Saber mas ---->"}</Text>
          <Image
            source={require("../assets/meteor_icon.png")}
            style={styles.iconImage}
          ></Image>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};
// agregando estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  droidSafeAreView: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  routeCard: {
    flex: 0.25,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 50,
    borderRadius: 15,
    backgroundColor: "pink",
  },
  titleText: {
    fontSize: 35,
    fontWeight: "bold",
    color: "white",
  },
  routeText: {
    fontSize: 35,
    fontWeight: "bold",
    color: "black",
    marginTop: 75,
    paddingLeft: 30,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  titleBar: {
    flex: 0.15,
    justifyContent: "center",
    alignItems: "center",
  },
  knowMore: {
    paddingLeft: 30,
    paddingTop: 2,
    color: "white",
    fontSize: 15,
  },
  bgDigit: {
    position: "absolute",
    color: "rgba(183, 183, 183, 0.5)",
    fontSize: 150,
    right: 20,
    bottom: -15,
    zIndex: -1,
  },
  iconImage: {
    position: "absolute",
    height: 200,
    width: 200,
    resizeMode: "contain",
    right: 20,
    top: -80,
  },
});

export default HomeScreen;
