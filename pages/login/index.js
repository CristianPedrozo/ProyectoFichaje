import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import * as Google from 'expo-google-app-auth';
import * as SecureStore from 'expo-secure-store';
import { color } from 'react-native-reanimated';

export default function Login({ navigation }) {
  //const { nombre } = route.params
  const [emailLogeado, setEmailLogeado] = useState(null)
  let obtenerEmail = async () => {
    try {
      const credentials = await SecureStore.getItemAsync('NT2')
      if (credentials) {
        setEmailLogeado(credentials)
      }
    } catch (e) {
      console.log(e);
    }
  };
  obtenerEmail()

  let guardarEmail = async (email) => {
    try {
      await SecureStore.setItemAsync(
        'NT2',
        email,
      );
      setEmailLogeado(email)
    } catch (e) {
      console.log(e);
    }
  };

  let limpiarEmail = async () => {
    try {
      setEmailLogeado(null)
      await SecureStore.deleteItemAsync('NT2');
    } catch (e) {
      console.log(e);
    }
  };

  let login = () => {
    obtenerEmail()
    if (emailLogeado != null) {
      obtenerDatos(emailLogeado, null)
    }
    else {
      signInWithGoogleAsync(navigation)
    }
  }

  function obtenerDatos(email, urlFoto) {
    // const API_URL_USUARIO = `https://tp2-nodejs.herokuapp.com/api/usuarios/${email}`
    const API_URL_USUARIO = `https://tp2-nodejs.herokuapp.com/api/usuarios/${email}` //Para probar admin
    fetch(API_URL_USUARIO)
      .then((response) => {
        if (response.ok) { return response.json() }
        else {
          alert("El email no existe en la BD")
        }
      })
      .then((json) => {
        if (urlFoto != null) {
          comprobarActualizacionFoto(json, urlFoto)
        }
        redireccionar(json)
      }
      )
      .catch((error) => console.error('There has been a problem with your fetch operation: ' + error));
  }

  async function comprobarActualizacionFoto(usuario, url) {
    const API_BASE_URL = 'https://tp2-nodejs.herokuapp.com/api/'
    if (usuario == undefined)
      return
    const emp = {
      _id: usuario._id,
      name: { first: usuario.first, last: usuario.last },
      adress: {
        street: usuario.street,
        number: parseInt(usuario.number),
        floor: parseInt(usuario.floor),
        apartment: usuario.apartment
      },
      phone: usuario.phone,
      email: usuario.email,
      jwt: null,
      imagePatch: url,
      isAdmin: usuario.isAdmin,
      checkIn: parseInt(usuario.checkIn),
      checkOut: parseInt(usuario.checkOut)
    }
    if (usuario.photoUrl != url) {
      const headers = new Headers();
      headers.append("Content-type", "application/json")

      const requestOptions = {
        method: "PUT",
        headers: headers,
        body: JSON.stringify(emp)
      }

      await fetch(`${API_BASE_URL}/usuarios/${emp._id}`, requestOptions)
        .then(response => { return response.json() })
        .catch(err => {
          console.error("Error en la comunicacion: ", err)
        })
    }
  }

  function redireccionar(json) {
    if (json != undefined) {
      if (json.isAdmin) {
        navigation.navigate("Employer",
          { data: json }
        )
      } else {
        navigation.navigate("Employee",
          { data: json }
        )
      }
    }
  }

  async function signInWithGoogleAsync() {
    try {
      const config = {
        iosClientId: `33860000961-hc93104d0s5ovs1t7jmcapdkvrdefu82.apps.googleusercontent.com`,
        androidClientId: `33860000961-un4ghka1k2sepcnj4gvqeoge4bndf25k.apps.googleusercontent.com`,
      };

      const result = await Google.logInAsync(config);
      const { type, accessToken } = result;
      if (type === 'success') {
        await guardarEmail(result.user.email)
        obtenerDatos(result.user.email, result.user.photoUrl)
      }
    } catch (e) {
      console.error("Error: ", e)
      return { error: true };
    }
  }

  return (
    <View style={styles.container}>
      <Text>Ingresa a la app fichaje</Text>
      <Button style={styles.Button} title="Ingresar" onPress={() => { login() }} />
      {
        emailLogeado != null ?
          <Button title="Deslogearse" onPress={() => { limpiarEmail() }}></Button> : null
      }
      <Button title="Go back" onPress={() => navigation.goBack()} />
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
  Text: {


  },
  Button: {
    backgroundColor: '#9966cc',
    color: '#9966cc'
  },
});