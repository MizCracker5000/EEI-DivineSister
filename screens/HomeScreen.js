import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
} from "react-native";

// Diego crea su primer componente
const HomeScreen = () => {
  // aqui va todo lo que va a tener mi componente
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <SafeAreaView style={styles.droidSafeAreView} />
      <View style={styles.titleBar}>
        {/* agreamos el titulo de la app */}
        <Text style={styles.titleText}>Rastreador de la EEI</Text>
      </View>
      {/*agregamos un TouchableOpacity  */}
      <TouchableOpacity style={styles.routeCard}>
        <Text>Divine Location of EEI </Text>
      </TouchableOpacity>
      {/* agregamos otro boton  */}
      <TouchableOpacity style={styles.routeCard}>
        <Text>Unholy Meteors</Text>
      </TouchableOpacity>
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
    color: "black",
    marginTop: 75,
    paddingLeft: 30,
  },
});

export default HomeScreen;
