import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

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
import * as Google from 'expo-google-app-auth';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./pages/login/index";
import Asistencias from "./pages/asistencias";
import AsistenciasEmployer from "./pages/AsistenciasEmployer";
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
      <Stack.Screen name="AsistenciasEmployer" component={AsistenciasEmployer} />
      <Stack.Screen name="indexFichar" component={QR} />
      <Stack.Screen name="ABM Empleados" component={CrudEmployees} />
      <Stack.Screen name="Create Employee" component={createEmployee} />
      <Stack.Screen name="Modify Employee" component={modifyEmployee} />
      <Stack.Screen name="ABM Licencias" component={CrudLicenses} />
      <Stack.Screen name="Crear Licencia" component={createLicense} />
      <Stack.Screen name="Modificar Licencia" component={modifyLicense} />
      <Stack.Screen name="Employee" component={Employee} />
      <Stack.Screen name="Tablero" component={Tablero} />
      <Stack.Screen name="Form" component={Form} />
      <Stack.Screen name="Employer" component={Employer} />
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