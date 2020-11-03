import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Employee from "./pages/employee";
import Employer from "./pages/employer";

const API_URL = 'https://tranquil-dusk-24173.herokuapp.com/api/usuarios/lesvanell@gmail.com';


export default function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error("hubo un error",error));
  }, []);
  console.log(data.name.first)
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