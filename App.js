import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./pages/home";
import Employer from "./pages/employer";
import Employee from "./pages/employee";

import CrudEmployees from './pages/crudEmployees';
import createEmployee from "./pages/createEmployee";
import modifyEmployee from "./pages/modifyEmployee";
import CrudLicenses from "./pages/crudLicenses";
import createLicense from './pages/createLicense';
import modifyLicense from './pages/modifyLicense';

import Tablero from "./pages/tablero"
import Form from "./pages/form"
import Asistencias from "./pages/asistencias"

const Stack = createStackNavigator();

export default function App() {

  
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Employee">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ABM Empleados" component={CrudEmployees} />
        <Stack.Screen name="Create Employee" component={createEmployee} />
        <Stack.Screen name="Modify Employee" component={modifyEmployee} />
        <Stack.Screen name="ABM Licencias" component={CrudLicenses} />
        <Stack.Screen name="Crear Licencia" component={createLicense} />
        <Stack.Screen name="Modificar Licencia" component={modifyLicense} />
        
        <Stack.Screen name="Employee" component={Employee} />
        <Stack.Screen name="Tablero" component={Tablero} />
        <Stack.Screen name="Form" component={Form} />
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