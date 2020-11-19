import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Google from 'expo-google-app-auth';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./pages/login/index"
import Home from "./pages/home";
import Asistencias from "./pages/asistencias";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Asistencias">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Asistencias" component={Asistencias} />
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
