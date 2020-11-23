import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import * as Google from 'expo-google-app-auth';
import * as SecureStore from 'expo-secure-store';
import { color } from 'react-native-reanimated';

export default function Login({ navigation }) {
  //const { nombre } = route.params
  const [emailLogeado, setEmailLogeado] = useState(null)

  let guardarEmail = async (email) => {
    try {
      await SecureStore.setItemAsync(
        'NT2',
        email,
      );
    } catch (e) {
      console.log(e);
    }
  };
  let obtenerEmail = async () => {
    try {
      const credentials = await SecureStore.getItemAsync('NT2')
      console.log('value of credentials: ', credentials);

      if (credentials) {
        setEmailLogeado(credentials)
      }
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

let login = ()=>{
  console.log(emailLogeado)
  obtenerEmail()
  if(emailLogeado != null){
    obtenerDatos(emailLogeado)
  }
  else{
    signInWithGoogleAsync(navigation)
  }
}

function obtenerDatos(email) {
  const API_URL_USUARIO = `https://stark-atoll-54719.herokuapp.com/api/usuarios/${email}`
      fetch(API_URL_USUARIO)
        .then((response) => {
          if (response.ok) { return response.json() }
          alert("El email no existe en la BD")
        })
        .then((json) => {
          redireccionar(json)
        }
        )
        .catch((error) => console.error('There has been a problem with your fetch operation: ' + error));
}

function redireccionar(json) {
  if (json != undefined) {
    navigation.navigate("Login")
     if (json.isAdmin == "true") {
      navigation.navigate("Employer",
        { usuario: json }
      )
    }
    navigation.navigate("Employee",
      { usuario: json }
    )
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
      guardarEmail(result.user.email)
      obtenerDatos(result.user.email)
    }
  } catch (e) {
    console.log("paso por aca")
    console.error("Error: ", e)
    return { error: true };
  }
}
  return (
    <View style={styles.container}>
    <Text>Ingresa a la app fichaje</Text>
    <Button style={styles.Button} title="Ingresar" onPress={() => { login() }} />
    {emailLogeado != null ?
        <Button  title="Deslogearse" onPress={()=>{ limpiarEmail()}}></Button> : null
      }
    <Button title="Go back" onPress={() => navigation.goBack()}/>
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