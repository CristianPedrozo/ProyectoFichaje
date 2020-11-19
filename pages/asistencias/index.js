import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import * as Google from 'expo-google-app-auth';

const API_URL = "http://localhost:3000/api/usuarios";

export default function Asistencias({ navigation }) {
    const headers = new Headers();
    headers.append("Content-type", "application/json")
    let idUsuario = ""
    const parametros = {
        method: "GET",
        headers: headers,
        body: JSON.stringify({idUsuario})
    }
    fetch(`${API_URL}`, parametros)
    .then(res => {
        console.log("Data antes de tratamiento: ", res)
        return res.json()
    }).then(data => {
        console.log(data)
    })
    .catch(err => {
        console.error("Error en la comunicacion: ", err)
    })
    
    //const { nombre } = route.params
  /*   fetch(`${API_URL}`, parametros)
        .then(res => {
            console.log("Data antes de tratamiento: ", res)
            return res.json()
        }).then(data => {
            console.log(data)
        })
        .catch(err => {
            console.error("Error en la comunicacion: ", err)
        })
     */
    return (
        <View style={styles.container}>
            <Text>Asistencias</Text>
            <Button title="Go back"
                onPress={() => navigation.goBack()}
            />
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
    Text:{ 
        

    },
    Button:{
        backgroundColor: '#9966cc',
        color: '#9966cc'
    },
});