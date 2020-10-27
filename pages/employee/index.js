import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Alert, Button, Image } from 'react-native';


export default function Employee() {

    return (
      <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image source={require('../../assets/logo.png')} style={styles.logo}></Image>
        </View>
        <View style={styles.headerRigth}>
          <Text>Empresa S.A.</Text>
        </View>
      </View>
      
      <View style={styles.body}>
        <Text>Datos del empleado</Text>
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
    flexDirection : 'column'
  },
  header: {
    flex: 0.7,
    flexDirection: 'row'
  },
  headerLeft : {
    flex: 1,
    marginTop: 40,
    marginLeft: 10
  },
  headerRigth : {
    flex: 0.9,
    justifyContent: 'center'
  },
  body : {
    flex: 1,
    backgroundColor : 'white',
    justifyContent: 'center',
  },
  footer : {
    flex: 0.7,
    flexDirection: 'row'
  },
  footerLeft : {
    flex: 1,
  },
  footerRigth : {
    flex: 1,
  },
  button : {
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