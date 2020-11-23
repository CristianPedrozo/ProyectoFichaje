import { ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, Alert, Image, TouchableOpacity } from 'react-native';
import moment from 'moment';

const API_BASE_URL = `https://tp2-nodejs.herokuapp.com/api`

export default function createLicense({route,navigation}) {

    const {empleado} = route.params;
    //Para el alta de una licencia
    const [start, setStart] = useState("")
    const [end, setEnd] = useState("")
    
    //JSON POST para crear una licencia 
    const licenseJson = {
        userId: empleado._id,
        start: start,
        end: end
    }

    //Para crear una licencia
    function create(){
        const headers = new Headers();
        headers.append("Content-type", "application/json")

        const requestOptions = {
            method: "POST",
            headers: headers,
            body: JSON.stringify(licenseJson)
        }

        fetch(`${API_BASE_URL}/licencias/`, requestOptions)
        .then(res => {
            console.log("Data antes de tratamiento: ", JSON.stringify(res));
            return res
        })
        .catch(err => {
            console.error("Error en la comunicacion: ", err)
        })

        navigation.navigate("ABM Licencias");
    }

    return (

        <ScrollView style={styles.container}>
            <View style={styles.container}> 
            <View>
                <TextInput style={styles.input} placeholder ="Desde: AAAA-MM-DD" onChangeText={setStart}></TextInput>
                <TextInput style={styles.input} placeholder ="Hasta: AAAA-MM-DD" onChangeText={setEnd}></TextInput>
                <Button title="Crear Licencia" onPress={create}/>
            </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    textTitle: {
        textAlign: "center",
        marginBottom: 20,
    },

    container: {
        padding: 20,
    },

    input: {
        borderWidth: 1,
        marginBottom: 12,
        borderRadius: 25,
        paddingHorizontal: 18,
    },

    line: {
        height: 2,
        backgroundColor: "black",
        marginVertical: 20,
    },

    icono: {
        width: 40,
        height: 40,
        borderRadius: 40,
    },

    itemContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },

    descName: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    descDate: {
        fontSize: 14,
    },

    description: {
        marginLeft: 18,
        flex:1
    },
})
