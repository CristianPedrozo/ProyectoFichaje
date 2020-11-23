import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import * as Google from 'expo-google-app-auth';


export default function Login({ navigation }) {
  //const { nombre } = route.params

  return (
    <View style={styles.container}>
      <Text>Ingresa con google</Text>
      <Button style={styles.Button} title="Ingresar" onPress={() => { signInWithGoogleAsync(navigation) }} />
      <Button title="Go back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

async function signInWithGoogleAsync(navigation) {
  try {
    const config = {
      iosClientId: `33860000961-hc93104d0s5ovs1t7jmcapdkvrdefu82.apps.googleusercontent.com`,
      androidClientId: `33860000961-un4ghka1k2sepcnj4gvqeoge4bndf25k.apps.googleusercontent.com`,
    };

    const result = await Google.logInAsync(config);
    const { type, accessToken } = result;
    if (type === 'success') {
      const API_URL_USUARIO = `https://stark-atoll-54719.herokuapp.com/api/usuarios/${result.user.email}`
      //const API_URL_USUARIO = `https://stark-atoll-54719.herokuapp.com/api/usuarios/test3Cristian@gmail.com`
      fetch(API_URL_USUARIO)
        .then((response) => {
          if (response.ok) { return response.json() }
          alert("Usuario no registrado en la base de datos")
        })
        .then((json) => {
          if(json != undefined){
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
        )
        .catch((error) => console.error('There has been a problem with your fetch operation: ' + error));
    }
  } catch (e) {
    console.log("paso por aca")
    console.error("Error: ", e)
    return { error: true };
  }
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