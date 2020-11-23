import { ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, Alert, Image, TouchableOpacity } from 'react-native';
import moment from 'moment';

const API_BASE_URL = `https://tp2-nodejs.herokuapp.com/api`

export default function modifyLicense({ route,navigation }) {
    const {license} = route.params;

    const [start, setStart] = useState(license.start)
    const [end, setEnd] = useState(license.end)
    
    //JSON POST para modificar una licencia 
    const licenseJson = {
        _id: license._id,
        userId: license.userId,
        start: start,
        end: end
    }

    //Para modificar una licencia
    function modify(){
        const headers = new Headers();
        headers.append("Content-type", "application/json")

        const requestOptions = {
            method: "PUT",
            headers: headers,
            body: JSON.stringify(licenseJson)
        }

        fetch(`${API_BASE_URL}/licencias/${license._id}`, requestOptions)
        .then(res => {
            console.log("Data antes de tratamiento: ", JSON.stringify(res));
            return res
        })
        .catch(err => {
            console.error("Error en la comunicacion: ", err)
        })
        navigation.navigate("ABM Licencias");
    }
//Paraeliminar
    function deleted(){
        const headers = new Headers();
        headers.append("Content-type", "application/json")

        const requestOptions = {
            method: "DELETE",
            headers: headers,
            body: JSON.stringify({"_id": license._id })
        }

        fetch(`${API_BASE_URL}/licencias/${license._id}`, requestOptions)
        .then(res => {
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
                <TextInput style={styles.input} placeholder ="Desde: AAAA-MM-DD" onChangeText={setStart}>{moment(license.start, 'YYYY-MM-DDThhmm:ss').format('YYYY-MM-DD')}</TextInput>
                <TextInput style={styles.input} placeholder ="Hasta: AAAA-MM-DD" onChangeText={setEnd}>{moment(license.end, 'YYYY-MM-DDThhmm:ss').format('YYYY-MM-DD')}</TextInput>
                <View style={styles.fixToText}>
                    <Button title="Modificar" onPress={modify}/>
                    <Button title="Eliminar" onPress={deleted}/>
                </View>
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

    itemContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },

    fixToText: {
        marginTop:20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})
