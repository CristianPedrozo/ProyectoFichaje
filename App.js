import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Google from 'expo-google-app-auth';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./pages/login/index"
import Home from "./pages/home";
import Asistencias from "./pages/asistencias";
import QR from "./pages/QRLector/indexFichar";

const Stack = createStackNavigator();
const MyTheme = {
  dark: false,
  colors: {
    primary: '#004b8d',
    background: '#004b8d',
    card: '#004b8d',
    text: 'white',
    border: '#004b8d',
    notification: '#004b8d',
  },
};
export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Asistencias" component={Asistencias} />
      <Stack.Screen name="indexFichar" component={QR} />
    </Stack.Navigator>
  </NavigationContainer>
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
