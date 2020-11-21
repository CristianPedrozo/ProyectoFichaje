import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./pages/home"
import Tablero from "./pages/tablero"
import Form from "./pages/form"

import Employee from "./pages/employee";
//import Employer from "./pages/employer";

const Stack = createStackNavigator();

export default function App() {

  
  return (
    //<Employee/>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Employee">
        <Stack.Screen name="Employee" component={Employee} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Tablero" component={Tablero} />
        <Stack.Screen name="Form" component={Form} />
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