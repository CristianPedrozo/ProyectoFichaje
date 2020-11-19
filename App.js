import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import VistaAsistenciaQR from "./pages/QRLector/indexFichar";

const crudEmpleado={"name":{"first":"Admin","last":"admin"},
"adress":{"street":"Calle Falsa","number":1234,"floor":5,"apartment":"C"},
"_id":"5fab59367fa94b820060a637",
"phone":"1511223344",
"email":"admin@admin",
"secret":"WjJGaWFWOXNZVzFoYzE5cmNHRkFlV0ZvYjI4dVkyOXQ5MTI2",
"imagePatch":"TBD",
"isAdmin":true,
"checkIn":1000,
"checkOut":1900,"__v":0};
export default function App() {
  return (
    <VistaAsistenciaQR usuario={crudEmpleado}></VistaAsistenciaQR>
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
