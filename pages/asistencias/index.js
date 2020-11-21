import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ScrollViewAsistencias from "../../components/ScrollViewAsistencias";


export default function Asistencias({ navigation, route }) {
    const {data} = route.params;

    const [asistencias, setasistencias] = useState([]);
    const API_URL_ASISTENCIAS = `https://stark-atoll-54719.herokuapp.com/api/asistencias/usuario/${data._id}`
    useEffect(() => {
        fetch(API_URL_ASISTENCIAS) 
            .then((response) => response.json())
            .then((json) => setasistencias(json))
            .catch((error) => console.error('There has been a problem with your fetch operation: ' + error));
    }, []);

  return (
    <View style={styles.container}>
        <ScrollViewAsistencias asistencias={asistencias} />
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