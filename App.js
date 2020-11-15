import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./pages/home";
import Employer from "./pages/employer";
import Employee from "./pages/employee";
import FormEmployee from "./pages/FormEmployee";
import CrudEmployees from './pages/crudEmployees';
import AMEmployees from "./pages/AMEmployees";
import createEmployee from "./pages/createEmployee"
import modifyEmployee from "./pages/modifyEmployee"

const Stack = createStackNavigator();
export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ABM Empleados">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ABM Empleados" component={CrudEmployees} />
        <Stack.Screen name="Alta Empleado" component={FormEmployee} />
        <Stack.Screen name="AM Empleado" component={AMEmployees} />
        <Stack.Screen name="Formulario Empleado" component={FormEmployee} />
        <Stack.Screen name="Create Employee" component={createEmployee} />
        <Stack.Screen name="Modify Employee" component={modifyEmployee} />
        {/* <Stack.Screen name="Employer" component={Employer} />
        <Stack.Screen name="Employee" component={Employee} />
        <Stack.Screen name="Employee" component={FormEmployee} /> */}
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
