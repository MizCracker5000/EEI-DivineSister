import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import React from 'react';
// importamos  la pantalla
import HomeScreen from './screens/HomeScreen';
import IsLocationScreen from './screens/IsLocationScreen';
import MeteorScreen from './screens/MeteorScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      <HomeScreen/>
      {/* <IsLocationScreen/> */}
      {/* <MeteorScreen/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
