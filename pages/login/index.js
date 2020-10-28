import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import * as Google from 'expo-google-app-auth';


export default function Login({ navigation }) {

    //const { nombre } = route.params
    
    return (
        <View style={styles.container}>
            <Text>Ingresa con google</Text>
            <Button style={styles.Button} title="Ingresar" onPress={()=>{signInWithGoogleAsync(navigation)}}/>
            <Button title="Go back"
                onPress={() => navigation.goBack()}
            />
        </View>
    );
}

async function signInWithGoogleAsync(navigation) {
    console.log("Inicia logueo... ")
    try {
      const config = {
        // Se tiene que configurar un clientID para una App en iOS (pueden usar esta que estara disponible hasta el 31 de octubre)
        iosClientId: `33860000961-hc93104d0s5ovs1t7jmcapdkvrdefu82.apps.googleusercontent.com`,
        // Se tiene que configurar un clientID para una App en Android (pueden usar esta que estara disponible hasta el 31 de octubre)
        androidClientId: `33860000961-un4ghka1k2sepcnj4gvqeoge4bndf25k.apps.googleusercontent.com`,
      };
  
      const result = await Google.logInAsync(config);
      console.log("Result: ", result)
      const { type, accessToken } = result;
  
      if (type === 'success') {
        /* Log-Out */
        navigation.navigate("Home")
        //await Google.logOutAsync({ accessToken, ...config });
        /* `accessToken` is now invalid and cannot be used to get data from the Google API with HTTP requests */
      }
    } catch (e) {
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
    Text:{ 
        

    },
    Button:{
        backgroundColor: '#9966cc',
        color: '#9966cc'
    },
});