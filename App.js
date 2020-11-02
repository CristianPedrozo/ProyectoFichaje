import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Employee from "./pages/employee";
import Employer from "./pages/employer";

const API_URL = 'http://localhost:3000/api/usuarios/lesvanell@gmail.com';


export default function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://192.168.0.7:3000/api/usuarios/mail@gmail.com')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error("hubo un error",error));
  }, []);

  return (
    
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <Employee name={data.name}></Employee>
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