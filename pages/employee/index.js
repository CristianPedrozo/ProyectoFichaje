import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Alert, Button, Image, ActivityIndicator } from 'react-native';

//const API_URL = 'https://tranquil-dusk-24173.herokuapp.com/api/usuarios/lesvanell@gmail.com';
const API_URL = 'https://stark-atoll-54719.herokuapp.com/api/usuarios/Javier@olmedo'

export default function Employee() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          {/* <Image source={require('../../assets/logo.png')} style={styles.logo}></Image> */}
        </View>
        <View style={styles.headerRigth}>
          <Text>Empresa S.A.</Text>
        </View>
      </View>

      <View style={styles.body}>
        {isLoading ? <ActivityIndicator /> : (
          <Text>
            {data.name.first} {data.name.last} {data.adress.street}
          </Text>
        )}
      </View>


      <View style={styles.footer}>
        <View style={[styles.footerLeft, styles.button]}>
          <Button
            title="Fichar"
            onPress={() => Alert.alert('Debería abrir lector QR')}
          />
        </View>
        <View style={[styles.footerRigth, styles.button]}>
          <Button
            title="Mi tablero"
            onPress={() => Alert.alert('Debería mostrar menú de opciones')}
          />
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  header: {
    flex: 0.7,
    flexDirection: 'row',
    backgroundColor: 'orange'
  },
  headerLeft: {
    flex: 1,
    marginTop: 40,
    marginLeft: 10
  },
  headerRigth: {
    flex: 0.9,
    justifyContent: 'center'
  },
  body: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  footer: {
    flex: 0.7,
    flexDirection: 'row'
  },
  footerLeft: {
    flex: 1,
  },
  footerRigth: {
    flex: 1,
  },
  button: {
    justifyContent: 'center',
    marginLeft: 5,
    marginRight: 5
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 75,
    alignItems: 'center'
  },
});